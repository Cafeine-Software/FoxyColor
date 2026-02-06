/**
 * @summary A class for styling console text with ANSI escape codes
 * @description Implement terminal color based on :
 * - ECMA-48, 5th Edition (Juin 1991), Section 8.3.117
 * - AIXterm bright colors extension (codes 90-97, 100-107), an IBM extension that became a de facto standard
 * @see https://ecma-international.org/wp-content/uploads/ECMA-48_5th_edition_june_1991.pdf
 * @property {Object} ANSI The ANSI escape codes for styling text
 */
export default class FoxyColor {

    static ANSI = {

        reset: "\x1b[0m",

        STYLE: {
            bold: "\x1b[1m",
            faint: "\x1b[2m",
            italic: "\x1b[3m",
            underline: "\x1b[4m",
            slowBlink: "\x1b[5m",
            rapidBlink: "\x1b[6m", // ⬅ rarely supported
            reverse: "\x1b[7m",
            concealed: "\x1b[8m",
            strike: "\x1b[9m"
        },

        foreground: {

            classic:{
                black: "\x1b[30m",
                red: "\x1b[31m",
                green: "\x1b[32m",
                yellow: "\x1b[33m",
                blue: "\x1b[34m",
                magenta: "\x1b[35m",
                cyan: "\x1b[36m",
                white: "\x1b[37m"
            },

            bright: {
                black: "\x1b[90m",
                red: "\x1b[91m",
                green: "\x1b[92m",
                yellow: "\x1b[93m",
                blue: "\x1b[94m",
                magenta: "\x1b[95m",
                cyan: "\x1b[96m",
                white: "\x1b[97m"
            }
        },

        background: {

            classic:{
                black: "\x1b[40m",
                red: "\x1b[41m",
                green: "\x1b[42m",
                yellow: "\x1b[43m",
                blue: "\x1b[44m",
                magenta: "\x1b[45m",
                cyan: "\x1b[46m",
                white: "\x1b[47m"
            },

            bright: {
                black: "\x1b[100m",
                red: "\x1b[101m",
                green: "\x1b[102m",
                yellow: "\x1b[103m",
                blue: "\x1b[104m",
                magenta: "\x1b[105m",
                cyan: "\x1b[106m",
                white: "\x1b[107m"
            }
        }

    }

    /**
     * @summary Styles the given text with the given style options
     * @description Styles the given text according to the given style options with ANSI escape codes.
     * Then, it resets the style at the end of the text.
     * @see FoxyColor.ANSI for available styles, foreground colors and background colors.
     * @param {String} text The text to style
     * @param {FoxyStyleOptions} styleOptions The style options
     * @returns {String} The styled text
     * @throws {Error} If styleOptions is not provided
     * @see FoxyColor.ANSI
     */
    static style(text,styleOptions) {

        if(!styleOptions) throw new Error("styleOptions is required");

        const defaultStyleOptions = {
            foregroundColor: "",
            backgroundColor: "",
            style: ""
        };

        styleOptions = {
            ...defaultStyleOptions,
            ...styleOptions
        };

        const outputMessageString = `${styleOptions.style}${styleOptions.backgroundColor}${styleOptions.foregroundColor}${text}${FoxyColor.ANSI.reset}`;

        return outputMessageString;

    }

}

/**
 * @typedef FoxyStyleOptions
 * @property {String} foregroundColor The foreground color (one of {@link FoxyColor.ANSI.foreground})
 * @property {String} backgroundColor The background color (one of {@link FoxyColor.ANSI.background})
 * @property {String} style The style (one of {@link FoxyColor.ANSI.style})
 */

/**
 * @see FoxyColor.style
 * @param {FoxyStyleOptions} styleOptions 
 * @returns 
 */
String.prototype.foxyStyle = function(styleOptions) {
    return FoxyColor.style(this,styleOptions);
};