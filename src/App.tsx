import { css } from '@emotion/react';
import { Box, Tabs } from '@radix-ui/themes';
import { format } from 'date-fns';
import { useEffect, useState } from 'react';
import { AreaChart, AreaChartData } from './components/AreaChart';
import { generateRandomWeatherData } from './utils/generateRandomWeatherData';

export default function App() {
  const [data, setData] = useState<{ temperature: AreaChartData; humidity: AreaChartData }>({
    temperature: [],
    humidity: [],
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
      <Box width="300px" height="300px">
        dd
      </Box>
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
