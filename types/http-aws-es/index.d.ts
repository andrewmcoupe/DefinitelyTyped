// Type definitions for http-aws-es 6.0
// Project: https://github.com/TheDeveloper/http-aws-es#readme
// Definitions by: Marco Gonzalez <https://github.com/marcogrcr>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types="node" />

import * as AWS from "aws-sdk2-types";
import * as e from "elasticsearch";

declare module "elasticsearch" {
    interface ConfigOptions {
        awsConfig?: AWS.Config | undefined;
    }
}

declare const HttpAmazonESConnector: any;
export = HttpAmazonESConnector;
