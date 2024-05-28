# Dagger på 5min

Dagger er et verktøy som lar deg skrive CI og CD pipelines i TypeScript/Go/Python/mm og kjøre pipelines som containere.
Tenk AWS CDK, men for pipelines.

Trenger vi et nytt verktøy for CI/CD?
 1. De fleste store CI og CD verktøy benytter seg av YAML. YAML kan funke det, men YAML skalerer dårlig når prosjekter blir store og komplekse.
 2. Det finnes ingen standard for CI/CD. Man får raskt en vendor lock-in til Github Actions, Gitlab, Azure Pipelines.
 3. Det er vanskelig for utviklere å kjøre CI lokalt. Det å vente på CI bare for at sjekken går i rødt er kjipt, la utviklere få teste CI lokalt!

## Installer dagger
```bash
# Dagger krever Docker installert for å kjøre

curl -O https://dl.dagger.io/dagger/install.sh
sh install.sh
# Kan være lurt å mv til en dir som er i path
mv bin/dagger /usr/local/bin

# Hvis du foretreker oneliner se under:
# BIN_DIR=$HOME/.local/bin sh install.sh

# Klon dette prosjektet
git clone https://github.com/jon-andre/dagger-bytefest.git

cd dagger-bytefest
dagger call publish --source=.
```

## Ressurser
 - [Dagger Docs](https://docs.dagger.io/)
 - [Gjennomgang av Dagger med Solomon Hykes](https://www.youtube.com/watch?v=RgE7Y2Lvxro)
 - [Daggerverse](https://daggerverse.dev/)
