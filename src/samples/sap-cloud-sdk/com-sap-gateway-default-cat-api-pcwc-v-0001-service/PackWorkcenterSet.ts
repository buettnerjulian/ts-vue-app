/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PackWorkcenterSetRequestBuilder } from './PackWorkcenterSetRequestBuilder';
import { AllFields, BooleanField, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PackWorkcenterSet" of service "com.sap.gateway.default.cat.api_pcwc.v0001".
 */
export class PackWorkcenterSet extends EntityV4 implements PackWorkcenterSetType {
  /**
   * Technical entity name for PackWorkcenterSet.
   */
  static _entityName = 'PackWorkcenterSet';
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
   * Plant.
   * Maximum length: 4.
   */
  plant!: string;
  /**
   * Storage Number.
   * Maximum length: 4.
   */
  storageNumber!: string;
  /**
   * Storage Location.
   * Maximum length: 4.
   */
  storageLocation!: string;
  /**
   * Storage Place.
   * Maximum length: 18.
   */
  storagePlace!: string;
  /**
   * Printer.
   * Maximum length: 30.
   */
  printer!: string;
  /**
   * Packaging Allowed.
   */
  packagingAllowed!: boolean;

  /**
   * Returns an entity builder to construct instances of `PackWorkcenterSet`.
   * @returns A builder that constructs instances of entity type `PackWorkcenterSet`.
   */
  static builder(): EntityBuilderType<PackWorkcenterSet, PackWorkcenterSetType> {
    return EntityV4.entityBuilder(PackWorkcenterSet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PackWorkcenterSet` entity type.
   * @returns A `PackWorkcenterSet` request builder.
   */
  static requestBuilder(): PackWorkcenterSetRequestBuilder {
    return new PackWorkcenterSetRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PackWorkcenterSet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PackWorkcenterSet`.
   */
  static customField(fieldName: string): CustomFieldV4<PackWorkcenterSet> {
    return EntityV4.customFieldSelector(fieldName, PackWorkcenterSet);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface PackWorkcenterSetType {
  workcenter: string;
  plant: string;
  storageNumber: string;
  storageLocation: string;
  storagePlace: string;
  printer: string;
  packagingAllowed: boolean;
}

export namespace PackWorkcenterSet {
  /**
   * Static representation of the [[workcenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKCENTER: StringField<PackWorkcenterSet> = new StringField('Workcenter', PackWorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[plant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT: StringField<PackWorkcenterSet> = new StringField('Plant', PackWorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[storageNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STORAGE_NUMBER: StringField<PackWorkcenterSet> = new StringField('StorageNumber', PackWorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[storageLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STORAGE_LOCATION: StringField<PackWorkcenterSet> = new StringField('StorageLocation', PackWorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[storagePlace]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STORAGE_PLACE: StringField<PackWorkcenterSet> = new StringField('StoragePlace', PackWorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[printer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRINTER: StringField<PackWorkcenterSet> = new StringField('Printer', PackWorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[packagingAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PACKAGING_ALLOWED: BooleanField<PackWorkcenterSet> = new BooleanField('PackagingAllowed', PackWorkcenterSet, 'Edm.Boolean');
  /**
   * All fields of the PackWorkcenterSet entity.
   */
  export const _allFields: Array<StringField<PackWorkcenterSet> | BooleanField<PackWorkcenterSet>> = [
    PackWorkcenterSet.WORKCENTER,
    PackWorkcenterSet.PLANT,
    PackWorkcenterSet.STORAGE_NUMBER,
    PackWorkcenterSet.STORAGE_LOCATION,
    PackWorkcenterSet.STORAGE_PLACE,
    PackWorkcenterSet.PRINTER,
    PackWorkcenterSet.PACKAGING_ALLOWED
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PackWorkcenterSet> = new AllFields('*', PackWorkcenterSet);
  /**
   * All key fields of the PackWorkcenterSet entity.
   */
  export const _keyFields: Array<Field<PackWorkcenterSet>> = [PackWorkcenterSet.WORKCENTER];
  /**
   * Mapping of all key field names to the respective static field property PackWorkcenterSet.
   */
  export const _keys: { [keys: string]: Field<PackWorkcenterSet> } = PackWorkcenterSet._keyFields.reduce((acc: { [keys: string]: Field<PackWorkcenterSet> }, field: Field<PackWorkcenterSet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
