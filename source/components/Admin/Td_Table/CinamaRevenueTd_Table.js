const CinemaRevenueTdTable = data => `
<tr>
<td>${data}</td>
<td>${data.ticketTotal}</td>
<td>${`${data.moneytotal} VND`}</td>
</tr>`;
export default CinemaRevenueTdTable;
