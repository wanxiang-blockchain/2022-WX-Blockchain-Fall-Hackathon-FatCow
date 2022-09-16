import { DAppClient, NetworkType } from '@airgap/beacon-sdk';

// ----------------------------------------------------------------------

const dAppClient = new DAppClient({ name: 'Beacon Docs', preferredNetwork: NetworkType.EDONET });

const getActiveAccount = async () => {
  try {
    return await dAppClient.getActiveAccount();
  } catch (err) {
    console.error(err);
    return null;
  }
};
const checkActiveAccount = async () => {
  try {
    const activeAccount = await dAppClient.getActiveAccount();
    if (activeAccount) {
      // User already has account connected, everything is ready
      // You can now do an operation request, sign request, or send another permission request to switch wallet
      console.log('Already connected:', activeAccount.address);
      return activeAccount.address;
    } else {
      const permissions = await dAppClient.requestPermissions({
        network: {
          type: NetworkType.GHOSTNET,
        },
      });
      console.log('New connection:', permissions.address);
      return permissions.address;
    }
  } catch (err) {
    console.error(err);
    return null;
  }
};

const clearActiveAccount = async () => {
  dAppClient.clearActiveAccount().then(async () => {
    const account = await dAppClient.getActiveAccount();

    console.log('Active Account', account);
  });
};

export { getActiveAccount, checkActiveAccount, clearActiveAccount };
