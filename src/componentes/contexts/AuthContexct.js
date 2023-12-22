import { Auth } from 'aws-amplify';
import { createContext, useState, useEffect, useContext } from 'react';
import GROUPS from '../constants/groups';

const AuthContext = createContext({});

export const getGroupName = (groups) => {
  let groupName = '';
  if (groups.includes(GROUPS.ADMIN)) {
    groupName = GROUPS.ADMIN;
  } else if (groups.includes(GROUPS.GERENCIA)) {
    groupName = GROUPS.GERENCIA;
  }
  return groupName;
};
