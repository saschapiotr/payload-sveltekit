const checkRole = (allRoles, user) => {
  if (user) {
    if (allRoles.some((role) => user.roles && user.roles.some((individualRole) => individualRole === role))) {
      return true;
    }
  }

  return false;
};

export default checkRole;