import button from '../Button/button';

const ManagementBodyTable = data => `
<tr>
<td>${data.value}</td>
<td>${data.value1}</td>
<td>${button('btn-remove', 'Delete', 'value')}</td>
</tr>`;
export default ManagementBodyTable;
