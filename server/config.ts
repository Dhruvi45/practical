import "dotenv/config";

export const getServer = () => {
  return process.env.Server;
};

export const getDbName = () => {
  return process.env.Name;
};

export const getDbPort = () => {
  return process.env.DBPort;
};

export const getPort = () => {
  return process.env.Port;
};

export const getUsername = () => {
  return process.env.DBUsername;
};

export const getPassword = () => {
  return process.env.Password;
};
