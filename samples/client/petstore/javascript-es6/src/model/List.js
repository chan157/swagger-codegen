/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.18-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from '../ApiClient';

/**
 * The List model module.
 * @module model/List
 * @version 1.0.0
 */
export class List {
  /**
   * Constructs a new <code>List</code>.
   * @alias module:model/List
   * @class
   */
  constructor() {
  }

  /**
   * Constructs a <code>List</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/List} obj Optional instance to populate.
   * @return {module:model/List} The populated <code>List</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new List();
      if (data.hasOwnProperty('123-list'))
        obj._123List = ApiClient.convertToType(data['123-list'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} _123List
 */
List.prototype._123List = undefined;


