import td from '../Td_Table/ManagementBodyTable';

const ManagementTable = (infoTable, data) => `
<table>
<thead>
<td width="10%" class="title-table">${infoTable.info1}</td>
<td width="10%" class="title-table">${infoTable.info2}</td>
<td width="10%" class="title-table">${infoTable.info3}</td>
</thead>
<tbody>
${td(data)}
</tbody>
</table>
</center>`;
export default ManagementTable;
