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
* A report execution.
*/
export class ReportExecution {
    /**
    * The type of this resource. Is always `report-execution`.
    */
    'type'?: ReportExecution.TypeEnum;
    /**
    * The unique identifier for this report execution.
    */
    'id'?: string;
    /**
    * The date and time this report execution was created in our system.
    */
    'createdAt'?: Date;
    /**
    * The date and time this report execution was last updated.
    */
    'updatedAt'?: Date;
    /**
    * The status of this report execution.
    */
    'status'?: ReportExecution.StatusEnum;
    /**
    * The `id` of the report to associate this report execution to.
    */
    'reportId'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "type",
            "baseName": "type",
            "type": "ReportExecution.TypeEnum"
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
            "name": "status",
            "baseName": "status",
            "type": "ReportExecution.StatusEnum"
        },
        {
            "name": "reportId",
            "baseName": "report_id",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return ReportExecution.attributeTypeMap;
    }
}

export namespace ReportExecution {
    export enum TypeEnum {
        ReportExecution = <any> 'report-execution'
    }
    export enum StatusEnum {
        Dispatched = <any> 'dispatched',
        Failed = <any> 'failed',
        Pending = <any> 'pending',
        Processing = <any> 'processing',
        Succeeded = <any> 'succeeded'
    }
}
