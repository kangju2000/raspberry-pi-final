import { css } from '@emotion/react';
import { Flex, Tabs } from '@radix-ui/themes';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { AreaChart, AreaChartData } from './components/AreaChart';
import { generateRandomWeatherData } from './utils/generateRandomWeatherData';

export default function App() {
  const [data, setData] = useState<{ temperature: AreaChartData; humidity: AreaChartData }>({
    temperature: [{ x: Date.now(), y: 0 }],
    humidity: [{ x: Date.now(), y: 0 }],
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newWeatherData = generateRandomWeatherData();
        return {
          temperature: [...prevData.temperature, { x: Date.now(), y: newWeatherData.temperature }],
          humidity: [...prevData.humidity, { x: Date.now(), y: newWeatherData.humidity }],
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div css={containerCss}>
      <Flex justify="center" align="center" width="100%" height="100%">
        <div css={boxContainerCss}>
          <div css={boxCss}>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.5 12.5C9.49986 12.775 9.42414 13.0446 9.28111 13.2794C9.13809 13.5143 8.93327 13.7053 8.68903 13.8316C8.44479 13.9579 8.17053 14.0146 7.89623 13.9956C7.62192 13.9766 7.35812 13.8825 7.13365 13.7237C6.90919 13.5649 6.73269 13.3475 6.62345 13.0951C6.51422 12.8428 6.47644 12.5653 6.51425 12.2929C6.55206 12.0206 6.66401 11.7639 6.83786 11.5508C7.0117 11.3378 7.24076 11.1767 7.5 11.085V6.5C7.5 6.36739 7.55268 6.24021 7.64645 6.14645C7.74022 6.05268 7.86739 6 8 6C8.13261 6 8.25979 6.05268 8.35355 6.14645C8.44732 6.24021 8.5 6.36739 8.5 6.5V11.085C8.79258 11.1884 9.04587 11.3801 9.22497 11.6335C9.40407 11.8869 9.50016 12.1897 9.5 12.5Z"
                fill="#525463"
              />
              <path
                d="M5.5 2.5C5.5 1.83696 5.76339 1.20107 6.23223 0.732233C6.70108 0.263392 7.33696 0 8 0C8.66304 0 9.29893 0.263392 9.76777 0.732233C10.2366 1.20107 10.5 1.83696 10.5 2.5V10.05C10.9823 10.5423 11.3086 11.166 11.4379 11.843C11.5672 12.5199 11.4937 13.22 11.2267 13.8554C10.9597 14.4907 10.5111 15.0332 9.93707 15.4146C9.36305 15.796 8.68919 15.9995 8 15.9995C7.31081 15.9995 6.63695 15.796 6.06294 15.4146C5.48892 15.0332 5.04029 14.4907 4.7733 13.8554C4.50631 13.22 4.43285 12.5199 4.56213 11.843C4.69141 11.166 5.01767 10.5423 5.5 10.05V2.5ZM8 1C7.60218 1 7.22065 1.15804 6.93934 1.43934C6.65804 1.72064 6.5 2.10218 6.5 2.5V10.487L6.333 10.637C5.95557 10.9745 5.68953 11.4187 5.57007 11.9107C5.45062 12.4028 5.48338 12.9195 5.66403 13.3925C5.84468 13.8655 6.1647 14.2725 6.58174 14.5597C6.99877 14.8468 7.49317 15.0005 7.9995 15.0005C8.50583 15.0005 9.00023 14.8468 9.41727 14.5597C9.83431 14.2725 10.1543 13.8655 10.335 13.3925C10.5156 12.9195 10.5484 12.4028 10.4289 11.9107C10.3095 11.4187 10.0434 10.9745 9.666 10.637L9.5 10.487V2.5C9.5 2.10218 9.34197 1.72064 9.06066 1.43934C8.77936 1.15804 8.39783 1 8 1Z"
                fill="#525463"
              />
            </svg>

            <strong>{data.temperature[data.temperature.length - 1]?.y.toFixed(1)}°C</strong>
          </div>

          <div css={boxGradientCss} />

          <div css={boxCss}>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M7.99999 14.3333C6.52221 14.3333 5.26377 13.8222 4.22466 12.8C3.18555 11.7778 2.66621 10.5333 2.66666 9.06668C2.66666 8.36668 2.80288 7.69735 3.07532 7.05868C3.34777 6.42001 3.73377 5.85601 4.23332 5.36668L7.06666 2.58335C7.19999 2.46112 7.34732 2.36668 7.50866 2.30001C7.66999 2.23335 7.83377 2.20001 7.99999 2.20001C8.16621 2.20001 8.33021 2.23335 8.49199 2.30001C8.65377 2.36668 8.80088 2.46112 8.93332 2.58335L11.7667 5.36668C12.2667 5.85557 12.6529 6.41957 12.9253 7.05868C13.1978 7.69779 13.3338 8.36712 13.3333 9.06668C13.3333 10.5333 12.814 11.7778 11.7753 12.8C10.7367 13.8222 9.47821 14.3333 7.99999 14.3333ZM3.99999 9.06668H12C12 8.54446 11.9 8.04735 11.7 7.57535C11.5 7.10335 11.2111 6.68935 10.8333 6.33335L7.99999 3.53335L5.16666 6.33335C4.78888 6.6889 4.49999 7.1029 4.29999 7.57535C4.09999 8.04779 3.99999 8.5449 3.99999 9.06668Z"
                fill="#525463"
              />
            </svg>

            <strong>{data.humidity[data.humidity.length - 1]?.y}%</strong>
          </div>
        </div>
      </Flex>
      <Tabs.Root css={tabsRootCss} defaultValue="temperature">
        <Tabs.List css={tabsListCss}>
          <Tabs.Trigger css={tabsTriggerCss} value="temperature">
            온도 기록
          </Tabs.Trigger>
          <Tabs.Trigger css={tabsTriggerCss} value="humidity">
            습도 기록
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content css={tabsContentCss} value="temperature">
          <AreaChart
            data={data.temperature}
            onRefresh={() => {
              // Data fetching logic
            }}
            tooltipCallbacks={{
              title: function (context) {
                return `온도: ${context[0].formattedValue}°C`;
              },
              label: function (context) {
                return `일자: ${format(new Date(context.parsed.x), 'yyyy-MM-dd')}`;
              },
              afterBody: function (context) {
                return `시간: ${format(new Date(context[0].parsed.x), 'HH:mm')}`;
              },
            }}
          />
        </Tabs.Content>
        <Tabs.Content css={tabsContentCss} value="humidity">
          <AreaChart
            data={data.humidity}
            onRefresh={() => {
              // Data fetching logic
            }}
            tooltipCallbacks={{
              title: function (context) {
                return `습도: ${context[0].formattedValue}%`;
              },
              label: function (context) {
                return `일자: ${format(new Date(context.parsed.x), 'yyyy-MM-dd')}`;
              },
              afterBody: function (context) {
                return `시간: ${format(new Date(context[0].parsed.x), 'HH:mm')}`;
              },
            }}
          />
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}

const containerCss = css({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  width: '100%',
  height: '100%',
  backgroundColor: 'var(--gray-3)',
});

const boxContainerCss = css({
  position: 'relative',
  display: 'flex',
  width: '80%',
  aspectRatio: '2 / 1',
  padding: 10,
  backgroundColor: 'white',
  borderRadius: 30,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
  gap: 4,
  '& > div': { flex: 1 },
  '& > div:first-child': { borderRadius: '20px 0 0 20px' },
  '& > div:last-child': { borderRadius: '0 20px 20px 0' },
  '& strong': { fontSize: 24, color: 'var(--violet-11)', fontVariantNumeric: 'tabular-nums' },
});

const boxGradientCss = css({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  borderRadius: 30,
  backgroundImage: 'linear-gradient(45deg, var(--violet-11), var(--cyan-11))',
  opacity: 0.1,

  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 30,
    backgroundImage: 'linear-gradient(45deg, var(--violet-11), var(--cyan-11))',
    filter: 'blur(20px)',
  },
});

const boxCss = css({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid #e0e0e0',
});

const tabsRootCss = css({
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '400px',
});

const tabsListCss = css({
  flexShrink: 0,
  display: 'flex',
  borderBottom: '1px solid var(--mauve-6)',
});

const tabsTriggerCss = css({
  backgroundColor: 'white',
  padding: '30px',
  height: 45,
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 18,
  lineHeight: 1,
  color: 'var(--mauve-11)',
  userSelect: 'none',
  '&:first-child': { borderTopLeftRadius: 18 },
  '&:last-child': { borderTopRightRadius: 18 },
  '&:hover': { color: 'var(--violet-11)', '& > span': { backgroundColor: 'inherit' } },
  '&[data-state="active"]': {
    color: 'var(--violet-11)',
    boxShadow: 'inset 0 -1px 0 0 currentColor, 0 1px 0 0 currentColor',
  },
});

const tabsContentCss = css({
  flexGrow: 1,
  padding: 20,
  backgroundColor: 'white',
  outline: 'none',
});
