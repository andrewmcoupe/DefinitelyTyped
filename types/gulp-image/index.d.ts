// Type definitions for gulp-image 4.3
// Project: https://github.com/1000ch/gulp-image#readme
// Definitions by: Aankhen <https://github.com/Aankhen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="node" />

import stream = require("stream");

export = GulpImage;

declare function GulpImage(options?: GulpImage.Options): stream.Transform;

declare namespace GulpImage {
    type OptimizerSetting =
        | boolean
        | any[];

    interface Options {
        pngquant?: OptimizerSetting | undefined;
        optipng?: OptimizerSetting | undefined;
        zopflipng?: OptimizerSetting | undefined;
        jpegRecompress?: OptimizerSetting | undefined;
        mozjpeg?: OptimizerSetting | undefined;
        guetzli?: OptimizerSetting | undefined;
        gifsicle?: OptimizerSetting | undefined;
        svgo?: OptimizerSetting | undefined;
        concurrent?: number | undefined;
        quiet?: boolean | undefined;
    }
}
