import { UploadOutlined } from '@ant-design/icons';
import { useUploadAvatarMutation } from '@features/Profile/model/api/profileApi';
import { useToastMessages } from '@shared/lib/hooks/useToastMessages';
import { Avatar } from '@shared/ui/Avatar';
import { Upload } from 'antd';
import { type ReactNode } from 'react';

interface ProfileCardAvatarProps {
  avatar?: ReactNode;
  userId: string;
}

export function ProfileCardAvatar(props: ProfileCardAvatarProps) {
  const { avatar, userId } = props;
  const [uploadAvatar, { isSuccess, isError }] = useUploadAvatarMutation();

  useToastMessages({
    isSuccess,
    isError,
  });

  const handleAvatarUpload = async (file: File) => {
    await uploadAvatar({
      userId,
      file,
    });
  };

  return (
    <Upload
      showUploadList={false}
      beforeUpload={handleAvatarUpload}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <Avatar src={avatar} size={128} icon={<UploadOutlined />} />
    </Upload>
  );
}
