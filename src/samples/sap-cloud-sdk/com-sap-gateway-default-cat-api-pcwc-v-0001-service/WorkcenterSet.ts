/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WorkcenterSetRequestBuilder } from './WorkcenterSetRequestBuilder';
import { AllFields, CustomFieldV4, EntityBuilderType, EntityV4, Field, StringField, Time, TimeField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "WorkcenterSet" of service "com.sap.gateway.default.cat.api_pcwc.v0001".
 */
export class WorkcenterSet extends EntityV4 implements WorkcenterSetType {
  /**
   * Technical entity name for WorkcenterSet.
   */
  static _entityName = 'WorkcenterSet';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = '/sap/opu/odata4/cat/api/default/cat/api_pcwc/0001/';
  /**
   * Workcenter Cat.
   * Maximum length: 8.
   */
  workcenterCat!: string;
  /**
   * Workcenter Type.
   * Maximum length: 10.
   */
  workcenterType!: string;
  /**
   * Workcenter Sap.
   * Maximum length: 8.
   */
  workcenterSap!: string;
  /**
   * Text.
   * Maximum length: 40.
   */
  text!: string;
  /**
   * Language.
   * Maximum length: 2.
   */
  language!: string;
  /**
   * Plant.
   * Maximum length: 4.
   */
  plant!: string;
  /**
   * Papermaker Day Offset.
   */
  papermakerDayOffset!: Time;
  /**
   * Workcenter Image.
   * Maximum length: 255.
   */
  workcenterImage!: string;

  /**
   * Returns an entity builder to construct instances of `WorkcenterSet`.
   * @returns A builder that constructs instances of entity type `WorkcenterSet`.
   */
  static builder(): EntityBuilderType<WorkcenterSet, WorkcenterSetType> {
    return EntityV4.entityBuilder(WorkcenterSet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `WorkcenterSet` entity type.
   * @returns A `WorkcenterSet` request builder.
   */
  static requestBuilder(): WorkcenterSetRequestBuilder {
    return new WorkcenterSetRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkcenterSet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `WorkcenterSet`.
   */
  static customField(fieldName: string): CustomFieldV4<WorkcenterSet> {
    return EntityV4.customFieldSelector(fieldName, WorkcenterSet);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface WorkcenterSetType {
  workcenterCat: string;
  workcenterType: string;
  workcenterSap: string;
  text: string;
  language: string;
  plant: string;
  papermakerDayOffset: Time;
  workcenterImage: string;
}

export namespace WorkcenterSet {
  /**
   * Static representation of the [[workcenterCat]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKCENTER_CAT: StringField<WorkcenterSet> = new StringField('WorkcenterCat', WorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[workcenterType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKCENTER_TYPE: StringField<WorkcenterSet> = new StringField('WorkcenterType', WorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[workcenterSap]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKCENTER_SAP: StringField<WorkcenterSet> = new StringField('WorkcenterSap', WorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[text]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEXT: StringField<WorkcenterSet> = new StringField('Text', WorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[language]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LANGUAGE: StringField<WorkcenterSet> = new StringField('Language', WorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[plant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PLANT: StringField<WorkcenterSet> = new StringField('Plant', WorkcenterSet, 'Edm.String');
  /**
   * Static representation of the [[papermakerDayOffset]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAPERMAKER_DAY_OFFSET: TimeField<WorkcenterSet> = new TimeField('PapermakerDayOffset', WorkcenterSet, 'Edm.TimeOfDay');
  /**
   * Static representation of the [[workcenterImage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKCENTER_IMAGE: StringField<WorkcenterSet> = new StringField('WorkcenterImage', WorkcenterSet, 'Edm.String');
  /**
   * All fields of the WorkcenterSet entity.
   */
  export const _allFields: Array<StringField<WorkcenterSet> | TimeField<WorkcenterSet>> = [
    WorkcenterSet.WORKCENTER_CAT,
    WorkcenterSet.WORKCENTER_TYPE,
    WorkcenterSet.WORKCENTER_SAP,
    WorkcenterSet.TEXT,
    WorkcenterSet.LANGUAGE,
    WorkcenterSet.PLANT,
    WorkcenterSet.PAPERMAKER_DAY_OFFSET,
    WorkcenterSet.WORKCENTER_IMAGE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<WorkcenterSet> = new AllFields('*', WorkcenterSet);
  /**
   * All key fields of the WorkcenterSet entity.
   */
  export const _keyFields: Array<Field<WorkcenterSet>> = [WorkcenterSet.WORKCENTER_CAT];
  /**
   * Mapping of all key field names to the respective static field property WorkcenterSet.
   */
  export const _keys: { [keys: string]: Field<WorkcenterSet> } = WorkcenterSet._keyFields.reduce((acc: { [keys: string]: Field<WorkcenterSet> }, field: Field<WorkcenterSet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
