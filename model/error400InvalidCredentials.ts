/**
 * Gr4vy API
 * Welcome to the Gr4vy API reference documentation. Our API is still very much a work in product and subject to change.
 *
 * The version of the OpenAPI document: 1.1.0-beta
 * Contact: code@gr4vy.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

/**
* Invalid credentials (HTTP 400).
*/
export class Error400InvalidCredentials {
    /**
    * `error`.
    */
    'type'?: Error400InvalidCredentials.TypeEnum;
    /**
    * `invalid_credentials`.
    */
    'code'?: Error400InvalidCredentials.CodeEnum;
    /**
    * `400`.
    */
    'status'?: Error400InvalidCredentials.StatusEnum;
    /**
    * The provided credentials are invalid.
    */
    'message'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Error400InvalidCredentials.TypeEnum"
        },
        {
            "name": "code",
            "baseName": "code",
            "type": "Error400InvalidCredentials.CodeEnum"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "Error400InvalidCredentials.StatusEnum"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return Error400InvalidCredentials.attributeTypeMap;
    }
}

export namespace Error400InvalidCredentials {
    export enum TypeEnum {
        Error = <any> 'error'
    }
    export enum CodeEnum {
        InvalidCredentials = <any> 'invalid_credentials'
    }
    export enum StatusEnum {
        NUMBER_400 = <any> 400
    }
}
