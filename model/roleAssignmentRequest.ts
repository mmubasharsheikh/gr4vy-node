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
import { RoleAssignmentRequestAssignee } from './roleAssignmentRequestAssignee';
import { RoleAssignmentRequestRole } from './roleAssignmentRequestRole';

/**
* A request to create a role assignment.
*/
export class RoleAssignmentRequest {
    'role': RoleAssignmentRequestRole;
    'assignee': RoleAssignmentRequestAssignee;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "role",
            "baseName": "role",
            "type": "RoleAssignmentRequestRole"
        },
        {
            "name": "assignee",
            "baseName": "assignee",
            "type": "RoleAssignmentRequestAssignee"
        }    ];

    static getAttributeTypeMap() {
        return RoleAssignmentRequest.attributeTypeMap;
    }
}

