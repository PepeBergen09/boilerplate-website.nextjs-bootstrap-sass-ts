#React cli - examples creating a components
npx generate-react-cli component Box

npx generate-react-cli component HomePage --type=page
npx generate-react-cli component Box --path=src/components/path
npx generate-react-cli component Box --withLazy=true
npx generate-react-cli component Box --withStory=true
npx generate-react-cli component Box --withStyle=true
npx generate-react-cli component Box --withTest=true


npx generate-react-cli component Box --dry-run
npx generate-react-cli component Box --flat


npx generate-react-cli component Box --type=layout --customDir=TemplateNameLayout
npx generate-react-cli component Box --describe

https://github.com/arminbro/generate-react-cli