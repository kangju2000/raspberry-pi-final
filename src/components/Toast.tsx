import { css, keyframes } from '@emotion/react';
import * as RadixToast from '@radix-ui/react-toast';

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
};

export function Toast({ open, onOpenChange, title, description }: Props) {
  return (
    <RadixToast.Root css={toastRootCss} open={open} onOpenChange={onOpenChange}>
      <RadixToast.Title css={toastTitleCss}>{title}</RadixToast.Title>
      <RadixToast.Description css={toastDescriptionCss}>{description}</RadixToast.Description>
    </RadixToast.Root>
  );
}

const slideIn = keyframes`
  from {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
  to {
    transform: translateX(0);
  }
`;

const hide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const swipeOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(100% + var(--viewport-padding)));
  }
`;

const toastRootCss = css({
  backgroundColor: 'white',
  borderRadius: 6,
  boxShadow: '0 10px 38px -10px hsl(206 22% 7% / 35%), 0 10px 20px -15px hsl(206 22% 7% / 20%)',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',
  '&[data-state="open"]': { animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)` },
  '&[data-state="closed"]': { animation: `${hide} 100ms ease-in` },
  '&[data-swipe="move"]': { transform: 'translateX(var(--radix-toast-swipe-move-x))' },
  '&[data-swipe="cancel"]': { transform: 'translateX(0)', transition: 'transform 200ms ease-out' },
  '&[data-swipe="end"]': { animation: `${swipeOut} 100ms ease-out` },
});

const toastTitleCss = css({
  gridArea: 'title',
  marginBottom: 5,
  fontWeight: 500,
  color: 'var(--slate-12)',
  fontSize: 15,
});

const toastDescriptionCss = css({
  gridArea: 'description',
  margin: 0,
  color: 'var(--slate-11)',
  fontSize: 13,
  lineHeight: 1.3,
});
