/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CreateRequestBuilderV4, DeleteRequestBuilderV4, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, ODataBatchChangeSetV4, ODataBatchRequestBuilderV4, UpdateRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { variadicArgumentToArray } from '@sap-cloud-sdk/util';
import { ActiveObjectSet, PackWorkcenterSet, WorkcenterSet } from './index';

/**
 * Batch builder for operations supported on the Com Sap Gateway Default Cat Api Pcwc V 0001 Service.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch(...requests: Array<ReadComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder | ODataBatchChangeSetV4<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>>): ODataBatchRequestBuilderV4;
export function batch(requests: Array<ReadComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder | ODataBatchChangeSetV4<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>>): ODataBatchRequestBuilderV4;
export function batch(first: undefined | ReadComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder | ODataBatchChangeSetV4<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder> | Array<ReadComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder | ODataBatchChangeSetV4<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>>, ...rest: Array<ReadComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder | ODataBatchChangeSetV4<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>>): ODataBatchRequestBuilderV4 {
  return new ODataBatchRequestBuilderV4(defaultComSapGatewayDefaultCatApiPcwcV0001ServicePath, variadicArgumentToArray(first, rest), map);
}

/**
 * Change set constructor consists of write operations supported on the Com Sap Gateway Default Cat Api Pcwc V 0001 Service.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset(...requests: Array<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>): ODataBatchChangeSetV4<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>;
export function changeset(requests: Array<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>): ODataBatchChangeSetV4<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>;
export function changeset(first: undefined | WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder | Array<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>, ...rest: Array<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder>): ODataBatchChangeSetV4<WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder> {
  return new ODataBatchChangeSetV4(variadicArgumentToArray(first, rest));
}

export const defaultComSapGatewayDefaultCatApiPcwcV0001ServicePath = '/sap/opu/odata4/cat/api/default/cat/api_pcwc/0001/';
const map = { 'ActiveObjectSet': ActiveObjectSet, 'PackWorkcenterSet': PackWorkcenterSet, 'WorkcenterSet': WorkcenterSet };
export type ReadComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder = GetAllRequestBuilderV4<ActiveObjectSet> | GetAllRequestBuilderV4<PackWorkcenterSet> | GetAllRequestBuilderV4<WorkcenterSet> | GetByKeyRequestBuilderV4<ActiveObjectSet> | GetByKeyRequestBuilderV4<PackWorkcenterSet> | GetByKeyRequestBuilderV4<WorkcenterSet>;
export type WriteComSapGatewayDefaultCatApiPcwcV0001ServiceRequestBuilder = CreateRequestBuilderV4<ActiveObjectSet> | UpdateRequestBuilderV4<ActiveObjectSet> | DeleteRequestBuilderV4<ActiveObjectSet> | CreateRequestBuilderV4<PackWorkcenterSet> | UpdateRequestBuilderV4<PackWorkcenterSet> | DeleteRequestBuilderV4<PackWorkcenterSet> | CreateRequestBuilderV4<WorkcenterSet> | UpdateRequestBuilderV4<WorkcenterSet> | DeleteRequestBuilderV4<WorkcenterSet>;
