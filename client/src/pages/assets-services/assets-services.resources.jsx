import { ToolbarOptions } from 'tubular-react';
import {
  ColumnDataType,
  createColumn,
  ColumnSortDirection,
} from 'tubular-common';

export const API_URL = '/api/assets/services';

export const toolbarOptions = new ToolbarOptions({
  advancePagination: true,
  bottomPager: true,
  topPager: false,
});

export const assetsServicesColumns = [
  createColumn('unique_id', {
    dataType: ColumnDataType.NUMERIC,
    isKey: true,
    label: 'Identificación',
    sortDirection: ColumnSortDirection.ASCENDING,
    sortOrder: 1,
    sortable: false,
    searchable: true,
  }),
  createColumn('name', {
    dataType: ColumnDataType.String,
    searchable: true,
    label: 'name',
    sortable: true,
  }),
  createColumn('plate', {
    dataType: ColumnDataType.String,
    label: 'Placa',
    searchable: true,
  }),
  createColumn('serial', {
    dataType: ColumnDataType.String,
    label: 'Serie',
    searchable: true,
  }),
  createColumn('next_service_date', {
    dataType: ColumnDataType.Date,
    label: 'Próximo Servicio',
    sortDirection: ColumnSortDirection.ASCENDING,
    sortOrder: 1,
    sortable: true,
  }),
  createColumn('service_type', {
    dataType: ColumnDataType.String,
    label: 'Tipo Servicio',
    sortDirection: ColumnSortDirection.ASCENDING,
    sortOrder: 1,
    sortable: true,
    searchable: true,
  }),
  createColumn('service_status', {
    dataType: ColumnDataType.String,
    label: 'Estado Servicio',
    sortDirection: ColumnSortDirection.ASCENDING,
    sortOrder: 1,
    sortable: true,
    searchable: true,
  }),
];

export const mobileBreakpointWidth = 800;
