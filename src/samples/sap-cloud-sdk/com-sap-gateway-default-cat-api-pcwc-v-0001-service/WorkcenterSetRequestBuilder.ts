/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { WorkcenterSet } from './WorkcenterSet';

/**
 * Request builder class for operations supported on the [[WorkcenterSet]] entity.
 */
export class WorkcenterSetRequestBuilder extends RequestBuilder<WorkcenterSet> {
  /**
   * Returns a request builder for retrieving one `WorkcenterSet` entity based on its keys.
   * @param workcenterCat Key property. See [[WorkcenterSet.workcenterCat]].
   * @returns A request builder for creating requests to retrieve one `WorkcenterSet` entity based on its keys.
   */
  getByKey(workcenterCat: string): GetByKeyRequestBuilderV4<WorkcenterSet> {
    return new GetByKeyRequestBuilderV4(WorkcenterSet, { WorkcenterCat: workcenterCat });
  }

  /**
   * Returns a request builder for querying all `WorkcenterSet` entities.
   * @returns A request builder for creating requests to retrieve all `WorkcenterSet` entities.
   */
  getAll(): GetAllRequestBuilderV4<WorkcenterSet> {
    return new GetAllRequestBuilderV4(WorkcenterSet);
  }

  /**
   * Returns a request builder for creating a `WorkcenterSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `WorkcenterSet`.
   */
  create(entity: WorkcenterSet): CreateRequestBuilderV4<WorkcenterSet> {
    return new CreateRequestBuilderV4(WorkcenterSet, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `WorkcenterSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `WorkcenterSet`.
   */
  update(entity: WorkcenterSet): UpdateRequestBuilderV4<WorkcenterSet> {
    return new UpdateRequestBuilderV4(WorkcenterSet, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `WorkcenterSet`.
   * @param workcenterCat Key property. See [[WorkcenterSet.workcenterCat]].
   * @returns A request builder for creating requests that delete an entity of type `WorkcenterSet`.
   */
  delete(workcenterCat: string): DeleteRequestBuilderV4<WorkcenterSet>;
  /**
   * Returns a request builder for deleting an entity of type `WorkcenterSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `WorkcenterSet` by taking the entity as a parameter.
   */
  delete(entity: WorkcenterSet): DeleteRequestBuilderV4<WorkcenterSet>;
  delete(workcenterCatOrEntity: any): DeleteRequestBuilderV4<WorkcenterSet> {
    return new DeleteRequestBuilderV4(WorkcenterSet, workcenterCatOrEntity instanceof WorkcenterSet ? workcenterCatOrEntity : { WorkcenterCat: workcenterCatOrEntity! });
  }
}
