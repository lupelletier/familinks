import HxButton from './hx-buttton';
const TableRow = (props: { user }) => {
  return (
    <tr>
      <td>{props.user.id}</td>
      <td>{props.user.firstname}</td>
      <td>{props.user.lastname}</td>
      <td>{props.user.email}</td>
    </tr>
  );
}

export default function UsersTable(props: { users }) {
  return (
    <table class="min-w-full divide-y divide-gray-200">
      <tr class="bg-gray-50">
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">First Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Name</th>
        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
      </tr>
      {props.users.map(user => {
        return (
          < TableRow user={user} />
        );
      })}
    </table>
  );
}
