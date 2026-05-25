/* eslint-disable @typescript-eslint/no-floating-promises */
import { Typography } from '@shared/ui/Typography';
import { Card } from '@shared/ui/Card';
import { getUserAuthData } from '@entities/User/model/selectors/selectors';
import { useSelector } from 'react-redux';
import type { User } from '@entities/User/model/types/user';
import { useUpdateUserMutation } from '@features/Profile/model/api/profileApi';
import { useState } from 'react';
import { useToastMessages } from '@shared/lib/hooks/useToastMessages';
import { ProfileCardAvatar } from '../ProfileCardAvatar/ProfileCardAvatar';

export function ProfileCard() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const user = useSelector(getUserAuthData)!;
  const [editableUser, setEditableUser] = useState<User>(user);
  const [updateUser, { isError, isSuccess }] = useUpdateUserMutation();

  useToastMessages({
    isSuccess,
    isError,
  });

  const handleFieldSave = async (field: keyof User) => {
    const data = { [field]: editableUser[field] };
    await updateUser({ userId: user.id, data });
  };

  return (
    <Card>
      <ProfileCardAvatar avatar={user.avatar} userId={user.id} />
      <Typography.Title
        level={3}
        style={{ margin: '5px 0 ' }}
        editable={{
          onChange: (value) => {
            setEditableUser({ ...editableUser, userName: value });
          },
          onEnd: () => {
            handleFieldSave('userName');
          },
        }}
      >
        {user.userName}
      </Typography.Title>
      <Typography.Title
        level={3}
        style={{ margin: '5px 0 ' }}
        editable={{
          onChange: (value) => {
            setEditableUser({ ...editableUser, userName: value });
          },
          onEnd: () => {
            handleFieldSave('userName');
          },
        }}
      >
        {user.userName}
      </Typography.Title>
    </Card>
  );
}
