import { Box, Center, VStack } from "@chakra-ui/react";

const MonkeDAOProof = () => {
  return (
    <VStack p="32px" gap="8px" align="start">
      <Center width="60px" height="60px">
        <svg
          width="75"
          height="74"
          viewBox="0 0 75 74"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M54.6337 12.778L56.2651 13.9632C60.0922 16.7438 62.7785 18.6989 64.7886 20.411C65.6153 21.1152 66.2899 21.7475 66.8498 22.3409C69.0541 25.7902 70.3402 29.7489 70.5841 33.8351C70.4799 34.6441 70.3059 35.5519 70.051 36.6071C69.4312 39.1737 68.4071 42.3344 66.9453 46.8334L66.3222 48.7512C64.8603 53.2502 63.831 56.4092 62.8239 58.8501C62.41 59.8531 62.0173 60.6895 61.6263 61.405C59.0266 64.5684 55.6582 67.0156 51.8462 68.5104C51.045 68.6612 50.1283 68.7761 49.0467 68.8598C46.4141 69.0634 43.0916 69.0661 38.3611 69.0661H36.3446C31.6141 69.0661 28.2916 69.0634 25.659 68.8598C24.5772 68.7761 23.6604 68.6611 22.8591 68.5103C19.0474 67.0156 15.6793 64.5687 13.0797 61.4056C12.6886 60.6899 12.2958 59.8534 11.8818 58.8501C10.8747 56.4092 9.84536 53.2502 8.38354 48.7512L7.76041 46.8334C6.29859 42.3344 5.27452 39.1737 4.65464 36.6071C4.3997 35.5515 4.22567 34.6434 4.1215 33.8342C4.36545 29.7485 5.65139 25.7904 7.85537 22.3415C8.41538 21.7479 9.09009 21.1154 9.91706 20.411C11.9272 18.6989 14.6135 16.7438 18.4406 13.9632L20.072 12.778C23.899 9.99742 26.5886 8.04677 28.8381 6.66409C29.7637 6.09514 30.5739 5.64885 31.3116 5.29964C35.2723 4.26947 39.4336 4.26951 43.3943 5.29974C44.1319 5.64893 44.9421 6.09519 45.8676 6.66409C48.1171 8.04677 50.8066 9.99743 54.6337 12.778ZM17.7208 9.54187C25.2763 4.05249 29.0541 1.30779 33.2356 0.428138C35.9507 -0.143038 38.755 -0.143038 41.4701 0.428138C45.6516 1.30779 49.4294 4.0525 56.9849 9.5419L58.6163 10.7272C66.1718 16.2166 69.9495 18.9613 72.0783 22.6663C73.4605 25.072 74.3271 27.739 74.6229 30.4978C75.0784 34.7464 73.6355 39.1875 70.7495 48.0695L70.1264 49.9873L70.1263 49.9875L70.1263 49.9875C67.2404 58.8694 65.7974 63.3104 62.9316 66.4798C61.0707 68.5378 58.802 70.1861 56.2697 71.32C52.3698 73.0661 47.7002 73.0661 38.3611 73.0661H36.3446C27.0055 73.0661 22.3359 73.0661 18.4359 71.32C15.9036 70.1861 13.6349 68.5378 11.7741 66.4798C8.90824 63.3104 7.46526 58.8693 4.57931 49.9873L3.95618 48.0695C1.07023 39.1875 -0.372743 34.7464 0.0828088 30.4978C0.378607 27.739 1.24517 25.072 2.62741 22.6663C4.75617 18.9613 8.53393 16.2166 16.0894 10.7272L17.7208 9.54189L17.7208 9.54187ZM30.0835 19.0462C29.5847 19.0997 28.9269 19.247 28.3839 19.4298C27.8232 19.6127 26.8123 20.1079 26.3444 20.4246L26 20.6521V29.3281V37.9998L29.7877 37.9908L33.571 37.9775L33.5931 32.3347C33.6152 26.8837 33.6196 26.6874 33.6991 26.5179C33.8845 26.1477 34.3171 25.9737 34.9705 26.0094C35.668 26.0451 35.9858 26.3127 36.0653 26.9372C36.0874 27.1335 36.1094 29.4575 36.1094 32.6335V37.9998H37.5H38.8862L38.8994 32.3882L38.8995 32.3805V32.3804C38.9127 26.7989 38.9127 26.781 39.0054 26.5803C39.1864 26.1833 39.5528 26.0005 40.1708 26.0005C40.7492 26.0005 41.1023 26.161 41.2877 26.5045L41.3849 26.6919L41.4069 32.3347L41.429 37.9775L45.2167 37.9908L49 37.9998V29.3281V20.6565L48.5762 20.38C47.0664 19.3897 45.177 18.8856 43.5524 19.0328C42.6077 19.1221 41.9588 19.3094 40.5373 19.9027C39.2438 20.4469 38.6346 20.6164 37.809 20.6744C36.8069 20.7368 35.9373 20.5361 34.3877 19.8759C32.5645 19.0997 31.505 18.8946 30.0835 19.0462ZM30.328 41.11C31.619 39.8428 33.4951 39.1649 36.0555 39.0409C36.4213 39.0187 36.7913 39.001 36.8731 39.001C37.1958 38.9877 38.7535 39.0852 39.2312 39.1472C40.7029 39.3466 41.968 39.7985 42.9706 40.4808C43.487 40.8309 44.1841 41.5575 44.5456 42.1202C45.2298 43.1836 45.6257 44.3931 45.8795 46.1698C45.9656 46.7901 45.9699 46.9984 45.9828 52.4038L46 57.9998H37.0022H28L28.0215 52.6741C28.0344 49.1251 28.056 47.1889 28.0904 46.8787C28.284 45.0311 28.5422 43.9855 29.0844 42.869C29.4416 42.1335 29.7987 41.6284 30.328 41.11ZM44.1712 49.834C44.2314 49.6834 44.2486 49.484 44.2659 48.7485L44.2831 47.8535H37.0237H29.7643L29.7815 48.7485C29.7944 49.546 29.8073 49.6701 29.8848 49.8473C29.9924 50.0866 30.1903 50.2682 30.4098 50.3347C30.6335 50.3967 43.4181 50.3967 43.6419 50.3302C43.8571 50.2682 44.0765 50.0644 44.1712 49.834Z"
            fill="#3B3D3D"
          />
        </svg>
      </Center>
      <Box as="p" textStyle={{ base: "", md: "title3" }} color={"neutral.7"}>
        Monke DAO{" "}
      </Box>
      <Box as="p" textStyle={{ base: "", md: "body5" }} color={"neutral.7"}>
        Collect the Proof of Monke by verifying your wallet
      </Box>
    </VStack>
  );
};

export default MonkeDAOProof;
