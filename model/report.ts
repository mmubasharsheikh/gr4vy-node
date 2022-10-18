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
import { ReportSpec } from './reportSpec';

/**
* A report record.
*/
export class Report {
    /**
    * The type of this resource. Is always `report`.
    */
    'type'?: Report.TypeEnum;
    /**
    * The unique identifier for this report.
    */
    'id'?: string;
    /**
    * The date and time this report was created in our system.
    */
    'createdAt'?: Date;
    /**
    * The date and time this report was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The name of this report.
    */
    'name'?: string;
    /**
    * The description of this report.
    */
    'description'?: string | null;
    /**
    * The specifications of this report.
    */
    'spec'?: ReportSpec;
    /**
    * Details of the latest execution of this report.
    */
    'latestExecution'?: ReportExecution | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "Report.TypeEnum"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updated_at",
            "type": "Date"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "spec",
            "baseName": "spec",
            "type": "ReportSpec"
        },
        {
            "name": "latestExecution",
            "baseName": "latest_execution",
            "type": "ReportExecution"
        }    ];

    static getAttributeTypeMap() {
        return Report.attributeTypeMap;
    }
}

export namespace Report {
    export enum TypeEnum {
        Report = <any> 'report'
    }
}
