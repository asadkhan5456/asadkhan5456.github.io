#!/bin/sh
# Check the built CV: page count, metadata, reading order and absence of personal data.
set -eu
# Usage: cv/check.sh [en|de]   (no argument checks both)
if [ $# -eq 0 ]; then sh "$0" en && sh "$0" de; exit $?; fi
LANG_CV="$1"
if [ "$LANG_CV" = "de" ]; then
  PDF="public/cv/Asad_Faiyyaz_Khan_Lebenslauf.pdf"
  HEADINGS="Asad Faiyyaz Khan|Profil|Berufserfahrung|Senior AI Engineer|Development Engineer|Masterarbeit|Data Scientist|Data Analyst|Kenntnisse|Ausbildung|Sprachen"
else
  PDF="public/cv/Asad_Faiyyaz_Khan_CV.pdf"
  HEADINGS="Asad Faiyyaz Khan|Summary|Experience|Senior AI Engineer|Development Engineer|Master's Thesis|Data Scientist Intern|Data Analyst Intern|Skills|Education|Languages"
fi
echo "== $PDF"
TXT="$(mktemp)"
pdftotext -layout "$PDF" "$TXT"
fail=0

pages=$(pdfinfo "$PDF" | awk '/^Pages:/ {print $2}')
echo "pages: $pages"; [ "$pages" -le 2 ] || { echo "FAIL: more than 2 pages"; fail=1; }
pdfinfo "$PDF" | grep -E '^(Title|Author|Tagged|Page size):'
pdffonts "$PDF" | tail -n +3 | awk '{print "font:", $1, "embedded:", $(NF-4)}'

# Headings must appear in this order.
prev=0
OLDIFS=$IFS; IFS='|'
for h in $HEADINGS; do
  line=$(grep -n -F "$h" "$TXT" | head -1 | cut -d: -f1)
  if [ -z "$line" ]; then echo "FAIL: missing '$h'"; fail=1; continue; fi
  if [ "$line" -lt "$prev" ]; then echo "FAIL: '$h' out of order"; fail=1; fi
  prev=$line
done
IFS=$OLDIFS
echo "headings in order: checked"

FLAT="$(mktemp)"; tr '\n' ' ' < "$TXT" | tr -s ' ' > "$FLAT"
for term in "Model Context Protocol" "Apache Kafka" "Kubernetes" "Microsoft Fabric" "Azure OpenAI" "LangGraph" "PySpark" "Hochschule Wismar"; do
  grep -q -F "$term" "$FLAT" || { echo "FAIL: key term missing: $term"; fail=1; }
done
echo "key terms: checked"

# Ligatures would break words like "workflow" or "office" for ATS parsers.
if LC_ALL=C.UTF-8 grep -q -P '[\x{FB00}-\x{FB06}]' "$TXT"; then echo "FAIL: ligature glyphs in text"; fail=1; fi

# Personal data that must never appear.
if grep -E -i -q '(\+49|\+91|0049)[ 0-9/().-]{6,}|\b01[5-7][0-9][ /-]?[0-9]{6,}' "$TXT"; then echo "FAIL: phone number"; fail=1; fi
if grep -E -i -q 'geburt|date of birth|\bborn\b|\b[0-3]?[0-9]\.[01]?[0-9]\.(19|20)[0-9]{2}\b' "$TXT"; then echo "FAIL: date of birth"; fail=1; fi
if grep -E -q '(stra(ss|ß)e|str\.|weg|gasse|platz|allee)[ ]*[0-9]+|\b[0-9]{5} [A-ZÄÖÜ][a-zäöü]+' "$TXT"; then echo "FAIL: street address"; fail=1; fi
echo "personal data: checked"

rm -f "$TXT" "$FLAT"
[ "$fail" -eq 0 ] && echo "CV check passed" || { echo "CV check FAILED"; exit 1; }
