// Skeleton Animations and Keyframes
// https://tailwindcss.com/docs/animation#arbitrary-values

export const extendAnimAndKeyframes = () => {
  return {
    animation: {
      indeterminate: 'anim-progress-indeterminate 2s linear infinite'
    },
    keyframes: {
      'anim-progress-indeterminate': {
        from: { transform: 'translateX(-200%)' },
        to: { transform: 'translateX(200%)' }
      }
    }
  } satisfies Record<string, Record<string, any>>;
};

export default extendAnimAndKeyframes;
