
import { message } from 'antd';
import { useState } from 'react';

/**
 * 테이블 로우아이템을 삭제하는 커스텀 훅
 * @param {Function} deleteMutation - 삭제 뮤테이션
 * @param {(String[] | String)} deleteTarget - 삭제할 id(s)
 * @param {Function} setDeleteTarget - 삭제 대상 선택하는 함수
 * @returns {[Promise, {deleting: Boolean}]} - [삭제 함수, 삭제중]
 */

interface IObj {
  deleteTarget: string | string[],
  setDeleteTarget: () => void,
}

interface IUseDeleteTableRow {
  deleteMutation: (variables: unknown) => void,
}

const useDeleteTableRow = (
  deleteMutation: IUseDeleteTableRow,
  { deleteTarget, setDeleteTarget }: IObj
): [() => Promise<unknown>, {deleting: Boolean}]  => {
  const [deleting, setDeleting] = useState(false);
  const handleDelete = async () => {
    const input = {
      input: {
        where: {
          ...(Array.isArray(deleteTarget)
            ? { id_in: deleteTarget }
            : { id: deleteTarget }),
        },
      },
    };

    if (!window.confirm('정말 삭제하시겠습니까?')) return;

    setDeleting(true);
    try {
      await deleteMutation({
        variables: input,
      });
    } catch (e) {
      message.error(`삭제 실패 ${e.message}`, 3);
      setDeleting(false);
      return;
    }
    message.success(`삭제 되었습니다.`, 3);
    setDeleteTarget([]);
    setDeleting(false);
  };

  return [handleDelete, { deleting }];
};

export default useDeleteTableRow;

enum AdsPlatform {
  'Admob', 'Applovin', 'AdColony', 'IronSource', 'Inmobi', 'Kidoz', 'UnityAds', 'Vungle'
}