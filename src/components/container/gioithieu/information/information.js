import { styled } from '@mui/material/styles';
import { Stack, Badge, Avatar, Typography, Divider } from '@mui/material';

const INFORMATIONS = [
    {
        title: 'Mã học phần',
        text: 'COMP103101'
    },
    {
        title: 'Tên lớp',
        text: 'Công nghệ Web'
    },
    {
        title: 'Giảng viên',
        text: 'Lương Trần Hy Hiến'
    },
    {
        title: 'Thời gian bắt đầu',
        text: '11/09/2021'
    },
    {
        title: 'Thời gian kết thúc',
        text: '06/11/2021'
    }
];

export const Information = () => (
    <RootStyle
        direction={{ xs: 'column', sm: 'row', md: 'row', lg: 'row' }}
        justifyContent='space-around'
        alignItems='center'
    >
        <Stack
            alignItems='center'
        >
            <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                variant="dot"
            >
                <Avatar
                    alt="Remy Sharp"
                    src="https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.6435-9/137381468_1078505349330475_7599036906699935928_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=vyfmTj5VmvoAX8uf27U&_nc_ht=scontent.fsgn5-5.fna&oh=d3ffd3f6817a40c019a9398821bd20d6&oe=619273C4"
                    sx={{ width: '140px', height: '140px' }}
                />
            </StyledBadge>
            <Typography variant='subtitle1'>
                Phan Huỳnh Phúc
            </Typography>
            <Typography variant='caption'>
                K45.CNTT.A
            </Typography>
            <Typography variant='caption'>
                45.01.104.180
            </Typography>
        </Stack>
        <Divider orientation='vertical' />
        <Stack
            spacing={1}
            sx={{ width: '40%' }}
        >
            <Divider>
                <Typography variant='title'>
                    <h3>Giới thiệu thông tin cá nhân</h3>
                </Typography>
            </Divider>
            {INFORMATIONS.map(infor => (
                <Stack direction='row' spacing={1} key={infor.title}>
                    <Typography variant='title' sx={{ color: '#000000' }}>
                        {infor.title}:
                    </Typography>
                    <Typography >
                        {infor.text}
                    </Typography>
                </Stack>
            ))}
        </Stack>
    </RootStyle >
);

const RootStyle = styled(Stack)(({ theme }) => ({
    width: '58%',
    height: '370px',
    boxShadow: '20px 20px 50px rgba(0,0,0,0.5)',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: '15px',
    borderTop: '1px solid rgba(255,255,255,0.5)',
    borderLeft: '1px solid rgba(255,255,255,0.5)',
    backdropFilter: 'blur(5px)',
    cursor: 'pointer',
    transition: '0.5s',
    padding: '20px',
    margin: '60px auto',
    '&:hover': {
        background: 'linear-gradient(135deg,rgba(0,0,0,0.4),rgba(255,255,255,0.4))'
    },
    [theme.breakpoints.down('sm')]: {
        width: '100%',
        margin: '5px',
        '& > .MuiDivider-root': {
            height: 0
        },
        '& > div': {
            width: '100%',
            alignItems: 'center'
        }
    }
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

export default Information;
