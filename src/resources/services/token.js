export const createToken = (tokenName, balance) => {
  const id = Math.floor(Math.random() * 100000);
  return {
    tokenName,
    balance,
    id,
  };
};
