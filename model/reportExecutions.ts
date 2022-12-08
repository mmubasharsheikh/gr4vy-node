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
import { ReportExecution } from './reportExecution';

/**
* A list of report executions.
*/
export class ReportExecutions {
    /**
    * A list of report executions.
    */
    'items'?: Array<ReportExecution>;
    /**
    * The limit applied to request. This represents the number of items that are at maximum returned by this request.
    */
    'limit'?: number;
    /**
    * The cursor that represents the next page of results. Use the `cursor` query parameter to fetch this page of items.
    */
    'nextCursor'?: string | null;
    /**
    * The cursor that represents the next page of results. Use the `cursor` query parameter to fetch this page of items.
    */
    'previousCursor'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "items",
            "baseName": "items",
            "type": "Array<ReportExecution>"
        },
        {
            "name": "limit",
            "baseName": "limit",
            "type": "number"
        },
        {
            "name": "nextCursor",
            "baseName": "next_cursor",
            "type": "string"
        },
        {
            "name": "previousCursor",
            "baseName": "previous_cursor",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReportExecutions.attributeTypeMap;
    }
}

