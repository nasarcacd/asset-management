import { ToolbarOptions } from 'tubular-react';
import { ColumnDataType, createColumn, ColumnSortDirection,
} from 'tubular-common';

const gridName = 'Mantenimiento de Activos';

const dataSource = '/api/assets/services';

const toolbarOptions = new ToolbarOptions({
  advancePagination: true,
  bottomPager: true,
  topPager: false,
});

const columns = [
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
    label: 'Nombre',
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

const mobileBreakpointWidth = 800;

const customOptions = {
  gridName: gridName,
  toolbarOptions: toolbarOptions,
  columns: columns,
  dataSource: dataSource,
  mobileBreakpointWidth: mobileBreakpointWidth
}

export default customOptions;