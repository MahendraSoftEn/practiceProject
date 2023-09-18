import { PERMISSIONS, checkMultiple } from "react-native-permissions";


const handlePermissions = async () => {
    const res = await checkMultiple([
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
      PERMISSIONS.ANDROID.CAMERA,
    ]).then(async (statuses) => {
      await requestMultiple([
        PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE,
        PERMISSIONS.ANDROID.CAMERA,
        PERMISSIONS.ANDROID.POST_NOTIFICATIONS,
      ]).then(async (statuses) => {
        // console.log('PERMISSION STATUS', statuses)
      });
    });
}

export {handlePermissions}