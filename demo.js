import FoxyColor from "./foxyColor.js";
import { padCenter } from '@cafeine-software/padCenter';

console.clear();

const stylizedTitle = "Foxy Color Demo Script".foxyStyle({
    style: FoxyColor.ANSI.STYLE.bold,
    foregroundColor: FoxyColor.ANSI.foreground.classic.red,
})

console.log();
console.log("🦊 " + stylizedTitle + " 🦊");

console.log();

let ansiStyleHeader = '';

for (const style in FoxyColor.ANSI.STYLE) {

    if(style !== 'bold'){continue}

    console.log(style.toUpperCase().foxyStyle({style: FoxyColor.ANSI.STYLE[style]}),"\n");

    for (const foregroundColorName in FoxyColor.ANSI.foreground.classic) {
        
        const foregroundColoredHeader = foregroundColorName.toUpperCase().padEnd(8).foxyStyle({foregroundColor: FoxyColor.ANSI.foreground.classic[foregroundColorName]})

        let backgroundColorNameHeader = "".padEnd(8)

        for (const backgroundColorName in FoxyColor.ANSI.background.classic) {
            backgroundColorNameHeader += padCenter(backgroundColorName,10) + " "
        }

        console.log(backgroundColorNameHeader);
        
        let line = `${foregroundColoredHeader}`;

        for (const backgroundColor in FoxyColor.ANSI.background.classic) {
            
            const stylizedText = padCenter(`DEMO`, 10).foxyStyle({
                style: FoxyColor.ANSI.STYLE[style],
                backgroundColor: FoxyColor.ANSI.background.classic[backgroundColor],
                foregroundColor: FoxyColor.ANSI.foreground.classic[foregroundColorName]
            })
    
            line += stylizedText + ' ';
    
        }

        console.log(line);

        console.log();
    
    }

    console.log();

}



console.log();