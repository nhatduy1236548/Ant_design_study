import styled from 'styled-components';
import { Select } from 'antd';

export const StyledSelect = styled(Select)`
    margin-right: 8px; // Tạo khoảng cách giữa các nút Select

    &:last-child {
        margin-right: 0; // Đảm bảo rằng nút Select cuối cùng không có margin ở bên phải
    }
`;