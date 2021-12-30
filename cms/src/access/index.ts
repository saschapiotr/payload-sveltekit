const checkRole = (allRoles, user) => {
  if (user) {
    if (allRoles.some((role) => user.roles && user.roles.some((individualRole) => individualRole === role))) {
      return true;
    }
  }

  return false;
};

const roles = [ 'admin', 'editor' ];

const admin = ({ req: { user } }) => checkRole(['admin'], user);
const editor = ({ req: { user } }) => checkRole(['admin', 'editor'], user);
const open = () => true;

export { admin, editor, open, roles };