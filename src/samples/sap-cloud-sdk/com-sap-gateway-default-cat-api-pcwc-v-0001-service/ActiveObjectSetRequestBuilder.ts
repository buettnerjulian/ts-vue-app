/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { ActiveObjectSet } from './ActiveObjectSet';

/**
 * Request builder class for operations supported on the [[ActiveObjectSet]] entity.
 */
export class ActiveObjectSetRequestBuilder extends RequestBuilder<ActiveObjectSet> {
  /**
   * Returns a request builder for retrieving one `ActiveObjectSet` entity based on its keys.
   * @param workcenter Key property. See [[ActiveObjectSet.workcenter]].
   * @returns A request builder for creating requests to retrieve one `ActiveObjectSet` entity based on its keys.
   */
  getByKey(workcenter: string): GetByKeyRequestBuilderV4<ActiveObjectSet> {
    return new GetByKeyRequestBuilderV4(ActiveObjectSet, { Workcenter: workcenter });
  }

  /**
   * Returns a request builder for querying all `ActiveObjectSet` entities.
   * @returns A request builder for creating requests to retrieve all `ActiveObjectSet` entities.
   */
  getAll(): GetAllRequestBuilderV4<ActiveObjectSet> {
    return new GetAllRequestBuilderV4(ActiveObjectSet);
  }

  /**
   * Returns a request builder for creating a `ActiveObjectSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ActiveObjectSet`.
   */
  create(entity: ActiveObjectSet): CreateRequestBuilderV4<ActiveObjectSet> {
    return new CreateRequestBuilderV4(ActiveObjectSet, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ActiveObjectSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ActiveObjectSet`.
   */
  update(entity: ActiveObjectSet): UpdateRequestBuilderV4<ActiveObjectSet> {
    return new UpdateRequestBuilderV4(ActiveObjectSet, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ActiveObjectSet`.
   * @param workcenter Key property. See [[ActiveObjectSet.workcenter]].
   * @returns A request builder for creating requests that delete an entity of type `ActiveObjectSet`.
   */
  delete(workcenter: string): DeleteRequestBuilderV4<ActiveObjectSet>;
  /**
   * Returns a request builder for deleting an entity of type `ActiveObjectSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ActiveObjectSet` by taking the entity as a parameter.
   */
  delete(entity: ActiveObjectSet): DeleteRequestBuilderV4<ActiveObjectSet>;
  delete(workcenterOrEntity: any): DeleteRequestBuilderV4<ActiveObjectSet> {
    return new DeleteRequestBuilderV4(ActiveObjectSet, workcenterOrEntity instanceof ActiveObjectSet ? workcenterOrEntity : { Workcenter: workcenterOrEntity! });
  }
}
