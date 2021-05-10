/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilderV4, GetByKeyRequestBuilderV4, CreateRequestBuilderV4, UpdateRequestBuilderV4, DeleteRequestBuilderV4 } from '@sap-cloud-sdk/core';
import { PackWorkcenterSet } from './PackWorkcenterSet';

/**
 * Request builder class for operations supported on the [[PackWorkcenterSet]] entity.
 */
export class PackWorkcenterSetRequestBuilder extends RequestBuilder<PackWorkcenterSet> {
  /**
   * Returns a request builder for retrieving one `PackWorkcenterSet` entity based on its keys.
   * @param workcenter Key property. See [[PackWorkcenterSet.workcenter]].
   * @returns A request builder for creating requests to retrieve one `PackWorkcenterSet` entity based on its keys.
   */
  getByKey(workcenter: string): GetByKeyRequestBuilderV4<PackWorkcenterSet> {
    return new GetByKeyRequestBuilderV4(PackWorkcenterSet, { Workcenter: workcenter });
  }

  /**
   * Returns a request builder for querying all `PackWorkcenterSet` entities.
   * @returns A request builder for creating requests to retrieve all `PackWorkcenterSet` entities.
   */
  getAll(): GetAllRequestBuilderV4<PackWorkcenterSet> {
    return new GetAllRequestBuilderV4(PackWorkcenterSet);
  }

  /**
   * Returns a request builder for creating a `PackWorkcenterSet` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PackWorkcenterSet`.
   */
  create(entity: PackWorkcenterSet): CreateRequestBuilderV4<PackWorkcenterSet> {
    return new CreateRequestBuilderV4(PackWorkcenterSet, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PackWorkcenterSet`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PackWorkcenterSet`.
   */
  update(entity: PackWorkcenterSet): UpdateRequestBuilderV4<PackWorkcenterSet> {
    return new UpdateRequestBuilderV4(PackWorkcenterSet, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PackWorkcenterSet`.
   * @param workcenter Key property. See [[PackWorkcenterSet.workcenter]].
   * @returns A request builder for creating requests that delete an entity of type `PackWorkcenterSet`.
   */
  delete(workcenter: string): DeleteRequestBuilderV4<PackWorkcenterSet>;
  /**
   * Returns a request builder for deleting an entity of type `PackWorkcenterSet`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PackWorkcenterSet` by taking the entity as a parameter.
   */
  delete(entity: PackWorkcenterSet): DeleteRequestBuilderV4<PackWorkcenterSet>;
  delete(workcenterOrEntity: any): DeleteRequestBuilderV4<PackWorkcenterSet> {
    return new DeleteRequestBuilderV4(PackWorkcenterSet, workcenterOrEntity instanceof PackWorkcenterSet ? workcenterOrEntity : { Workcenter: workcenterOrEntity! });
  }
}
