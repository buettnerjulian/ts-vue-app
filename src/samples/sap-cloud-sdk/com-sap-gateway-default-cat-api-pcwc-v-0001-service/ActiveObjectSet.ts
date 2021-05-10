/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ActiveObjectSetRequestBuilder } from './ActiveObjectSetRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ActiveObjectSet" of service "com.sap.gateway.default.cat.api_pcwc.v0001".
 */
export class ActiveObjectSet extends EntityV4 implements ActiveObjectSetType {
  /**
   * Technical entity name for ActiveObjectSet.
   */
  static _entityName = 'ActiveObjectSet';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata4/cat/api/default/cat/api_pcwc/0001/';
  /**
   * Workcenter.
   * Maximum length: 8.
   */
  workcenter!: string;
  /**
   * Order Number.
   * Maximum length: 12.
   */
  orderNumber!: string;
  /**
   * Operation Number.
   * Maximum length: 4.
   */
  operationNumber!: string;
  /**
   * Item Number.
   * Maximum length: 4.
   */
  itemNumber!: string;
  /**
   * Slitting Pattern.
   * Maximum length: 10.
   */
  slittingPattern!: string;
  /**
   * Slitting Pattern Version.
   * Maximum length: 6.
   */
  slittingPatternVersion!: string;

  /**
   * Returns an entity builder to construct instances of `ActiveObjectSet`.
   * @returns A builder that constructs instances of entity type `ActiveObjectSet`.
   */
  static builder(): EntityBuilderType<ActiveObjectSet, ActiveObjectSetType> {
    return EntityV4.entityBuilder(ActiveObjectSet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ActiveObjectSet` entity type.
   * @returns A `ActiveObjectSet` request builder.
   */
  static requestBuilder(): ActiveObjectSetRequestBuilder {
    return new ActiveObjectSetRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ActiveObjectSet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ActiveObjectSet`.
   */
  static customField(fieldName: string): CustomFieldV4<ActiveObjectSet> {
    return EntityV4.customFieldSelector(fieldName, ActiveObjectSet);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ActiveObjectSetType {
  workcenter: string;
  orderNumber: string;
  operationNumber: string;
  itemNumber: string;
  slittingPattern: string;
  slittingPatternVersion: string;
}

export namespace ActiveObjectSet {
  /**
   * Static representation of the [[workcenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKCENTER: StringField<ActiveObjectSet> = new StringField('Workcenter', ActiveObjectSet, 'Edm.String');
  /**
   * Static representation of the [[orderNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ORDER_NUMBER: StringField<ActiveObjectSet> = new StringField('OrderNumber', ActiveObjectSet, 'Edm.String');
  /**
   * Static representation of the [[operationNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION_NUMBER: StringField<ActiveObjectSet> = new StringField('OperationNumber', ActiveObjectSet, 'Edm.String');
  /**
   * Static representation of the [[itemNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEM_NUMBER: StringField<ActiveObjectSet> = new StringField('ItemNumber', ActiveObjectSet, 'Edm.String');
  /**
   * Static representation of the [[slittingPattern]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SLITTING_PATTERN: StringField<ActiveObjectSet> = new StringField('SlittingPattern', ActiveObjectSet, 'Edm.String');
  /**
   * Static representation of the [[slittingPatternVersion]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SLITTING_PATTERN_VERSION: StringField<ActiveObjectSet> = new StringField('SlittingPatternVersion', ActiveObjectSet, 'Edm.String');
  /**
   * All fields of the ActiveObjectSet entity.
   */
  export const _allFields: Array<StringField<ActiveObjectSet>> = [
    ActiveObjectSet.WORKCENTER,
    ActiveObjectSet.ORDER_NUMBER,
    ActiveObjectSet.OPERATION_NUMBER,
    ActiveObjectSet.ITEM_NUMBER,
    ActiveObjectSet.SLITTING_PATTERN,
    ActiveObjectSet.SLITTING_PATTERN_VERSION
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ActiveObjectSet> = new AllFields('*', ActiveObjectSet);
  /**
   * All key fields of the ActiveObjectSet entity.
   */
  export const _keyFields: Array<Field<ActiveObjectSet>> = [ActiveObjectSet.WORKCENTER];
  /**
   * Mapping of all key field names to the respective static field property ActiveObjectSet.
   */
  export const _keys: { [keys: string]: Field<ActiveObjectSet> } = ActiveObjectSet._keyFields.reduce((acc: { [keys: string]: Field<ActiveObjectSet> }, field: Field<ActiveObjectSet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
