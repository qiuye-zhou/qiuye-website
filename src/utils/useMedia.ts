import { ref, onUnmounted } from 'vue';

export const useMedia = () => {
    const isMedia = ref(false);
    const mediaQuery = matchMedia('(max-width: 768px)');
    isMedia.value = mediaQuery.matches;
    const handler = () => {
        isMedia.value = mediaQuery.matches;
    };

    mediaQuery.addEventListener('change', handler);

    onUnmounted(() => {
        mediaQuery.removeEventListener('change', handler);
    });
    return isMedia;
};
