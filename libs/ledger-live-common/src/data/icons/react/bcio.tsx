
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function bcio({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none"><path d="M8.97342 5.87662C8.80592 5.88643 8.6485 5.95988 8.53337 6.08195C8.41825 6.20401 8.35413 6.36546 8.35413 6.53325C8.35413 6.70104 8.41825 6.86248 8.53337 6.98455C8.6485 7.10661 8.80592 7.18006 8.97342 7.18987C9.14092 7.18006 9.29835 7.10661 9.41347 6.98455C9.52859 6.86248 9.59272 6.70104 9.59272 6.53325C9.59272 6.36546 9.52859 6.20401 9.41347 6.08195C9.29835 5.95988 9.14092 5.88643 8.97342 5.87662ZM12.0109 4.05412C11.8421 4.06219 11.6829 4.13493 11.5663 4.25726C11.4496 4.37959 11.3846 4.54211 11.3846 4.71112C11.3846 4.88013 11.4496 5.04266 11.5663 5.16498C11.6829 5.28731 11.8421 5.36005 12.0109 5.36812C12.1797 5.36005 12.339 5.28731 12.4556 5.16498C12.5722 5.04266 12.6373 4.88013 12.6373 4.71112C12.6373 4.54211 12.5722 4.37959 12.4556 4.25726C12.339 4.13493 12.1797 4.06219 12.0109 4.05412ZM12.0109 11.3434C11.8434 11.3532 11.686 11.4266 11.5709 11.5487C11.4557 11.6708 11.3916 11.8322 11.3916 12C11.3916 12.1678 11.4557 12.3292 11.5709 12.4513C11.686 12.5734 11.8434 12.6468 12.0109 12.6566C12.1784 12.6468 12.3358 12.5734 12.451 12.4513C12.5661 12.3292 12.6302 12.1678 12.6302 12C12.6302 11.8322 12.5661 11.6708 12.451 11.5487C12.3358 11.4266 12.1784 11.3532 12.0109 11.3434ZM15.0477 9.52087C14.9613 9.52097 14.8759 9.53807 14.7962 9.5712C14.7164 9.60433 14.644 9.65283 14.5831 9.71394C14.5221 9.77506 14.4737 9.84758 14.4408 9.92737C14.4079 10.0072 14.3909 10.0927 14.391 10.179C14.3911 10.2653 14.4082 10.3508 14.4414 10.4305C14.4745 10.5102 14.523 10.5826 14.5841 10.6436C14.6452 10.7046 14.7178 10.7529 14.7975 10.7859C14.8773 10.8188 14.9628 10.8357 15.0492 10.8356C15.2235 10.8354 15.3906 10.766 15.5138 10.6426C15.6369 10.5191 15.706 10.3518 15.7058 10.1775C15.7056 10.0032 15.6361 9.83602 15.5127 9.71288C15.3893 9.58974 15.222 9.52067 15.0477 9.52087ZM18.0844 7.69912C17.9962 7.69625 17.9083 7.71115 17.826 7.74294C17.7437 7.77473 17.6686 7.82275 17.6053 7.88416C17.5419 7.94557 17.4915 8.01911 17.4571 8.10039C17.4228 8.18167 17.4051 8.26903 17.4052 8.35727C17.4053 8.44552 17.4232 8.53284 17.4577 8.61404C17.4923 8.69524 17.5428 8.76866 17.6063 8.82993C17.6698 8.89119 17.745 8.93905 17.8274 8.97065C17.9098 9.00225 17.9977 9.01695 18.0859 9.01387C18.2564 9.00792 18.4179 8.93596 18.5364 8.81317C18.6548 8.69038 18.7209 8.52638 18.7207 8.35577C18.7205 8.18517 18.6541 8.02132 18.5353 7.8988C18.4166 7.77628 18.2549 7.70469 18.0844 7.69912ZM8.97342 13.1659C8.80592 13.1757 8.6485 13.2491 8.53337 13.3712C8.41825 13.4933 8.35413 13.6547 8.35413 13.8225C8.35413 13.9903 8.41825 14.1517 8.53337 14.2738C8.6485 14.3959 8.80592 14.4693 8.97342 14.4791C9.14092 14.4693 9.29835 14.3959 9.41347 14.2738C9.52859 14.1517 9.59272 13.9903 9.59272 13.8225C9.59272 13.6547 9.52859 13.4933 9.41347 13.3712C9.29835 13.2491 9.14092 13.1757 8.97342 13.1659ZM5.93592 7.69912C5.84964 7.69922 5.76423 7.71631 5.68456 7.74942C5.60488 7.78253 5.53251 7.83101 5.47157 7.89208C5.41063 7.95316 5.36232 8.02564 5.3294 8.10539C5.29647 8.18514 5.27957 8.27059 5.27967 8.35687C5.27977 8.44315 5.29686 8.52857 5.32997 8.60824C5.36308 8.68791 5.41156 8.76028 5.47263 8.82122C5.53371 8.88216 5.60619 8.93047 5.68594 8.9634C5.76569 8.99633 5.85114 9.01322 5.93742 9.01312C6.11167 9.01292 6.2787 8.94351 6.40177 8.82016C6.52484 8.69681 6.59387 8.52962 6.59367 8.35537C6.59347 8.18113 6.52406 8.01409 6.40071 7.89102C6.27736 7.76795 6.11017 7.69892 5.93592 7.69912ZM5.93592 14.9876C5.84959 14.9877 5.76413 15.0048 5.68441 15.0379C5.60469 15.0711 5.53228 15.1196 5.47131 15.1807C5.34817 15.3041 5.2791 15.4714 5.2793 15.6457C5.2795 15.8201 5.34895 15.9872 5.47237 16.1104C5.59579 16.2335 5.76308 16.3026 5.93742 16.3024C6.11177 16.3022 6.2789 16.2327 6.40204 16.1093C6.52518 15.9859 6.59425 15.8186 6.59405 15.6442C6.59385 15.4699 6.5244 15.3028 6.40098 15.1796C6.27755 15.0565 6.11027 14.9874 5.93592 14.9876ZM5.93592 11.3434C5.76842 11.3532 5.611 11.4266 5.49587 11.5487C5.38075 11.6708 5.31663 11.8322 5.31663 12C5.31663 12.1678 5.38075 12.3292 5.49587 12.4513C5.611 12.5734 5.76842 12.6468 5.93592 12.6566C6.10342 12.6468 6.26085 12.5734 6.37597 12.4513C6.4911 12.3292 6.55522 12.1678 6.55522 12C6.55522 11.8322 6.4911 11.6708 6.37597 11.5487C6.26085 11.4266 6.10342 11.3532 5.93592 11.3434ZM12.0109 7.69912C11.9227 7.69614 11.8348 7.71094 11.7525 7.74264C11.6701 7.77433 11.595 7.82227 11.5315 7.88361C11.4681 7.94495 11.4176 8.01843 11.3832 8.09967C11.3487 8.18091 11.331 8.26825 11.331 8.3565C11.331 8.44474 11.3487 8.53209 11.3832 8.61333C11.4176 8.69457 11.4681 8.76805 11.5315 8.82938C11.595 8.89072 11.6701 8.93866 11.7525 8.97036C11.8348 9.00205 11.9227 9.01685 12.0109 9.01387C12.1814 9.00811 12.343 8.93633 12.4616 8.81368C12.5802 8.69103 12.6465 8.5271 12.6465 8.3565C12.6465 8.1859 12.5802 8.02197 12.4616 7.89932C12.343 7.77666 12.1814 7.70488 12.0109 7.69912ZM15.0477 5.87662C14.9595 5.87375 14.8716 5.88865 14.7893 5.92044C14.707 5.95223 14.6319 6.00025 14.5685 6.06166C14.5051 6.12307 14.4548 6.19661 14.4204 6.27789C14.386 6.35917 14.3684 6.44653 14.3685 6.53477C14.3686 6.62302 14.3864 6.71034 14.421 6.79154C14.4555 6.87274 14.5061 6.94616 14.5696 7.00743C14.6331 7.06869 14.7083 7.11655 14.7907 7.14815C14.8731 7.17975 14.961 7.19445 15.0492 7.19137C15.2197 7.18542 15.3812 7.11346 15.4996 6.99067C15.6181 6.86788 15.6842 6.70388 15.684 6.53327C15.6838 6.36267 15.6173 6.19882 15.4986 6.0763C15.3799 5.95378 15.2182 5.88219 15.0477 5.87662ZM15.0477 13.1659C14.9614 13.1659 14.876 13.183 14.7963 13.216C14.7166 13.2491 14.6442 13.2975 14.5832 13.3586C14.5222 13.4196 14.4739 13.4921 14.4409 13.5718C14.4079 13.6515 14.391 13.737 14.391 13.8232C14.3911 13.9095 14.4081 13.995 14.4412 14.0746C14.4743 14.1543 14.5227 14.2267 14.5837 14.2877C14.6448 14.3487 14.7172 14.397 14.797 14.43C14.8767 14.463 14.9621 14.4799 15.0484 14.4799C15.2227 14.4798 15.3897 14.4105 15.5129 14.2872C15.636 14.1639 15.7051 13.9967 15.705 13.8225C15.7049 13.6483 15.6356 13.4812 15.5124 13.358C15.3891 13.2349 15.2219 13.1658 15.0477 13.1659ZM18.0844 11.3434C17.9169 11.3532 17.7595 11.4266 17.6444 11.5487C17.5292 11.6708 17.4651 11.8322 17.4651 12C17.4651 12.1678 17.5292 12.3292 17.6444 12.4513C17.7595 12.5734 17.9169 12.6468 18.0844 12.6566C18.2519 12.6468 18.4093 12.5734 18.5245 12.4513C18.6396 12.3292 18.7037 12.1678 18.7037 12C18.7037 11.8322 18.6396 11.6708 18.5245 11.5487C18.4093 11.4266 18.2519 11.3532 18.0844 11.3434ZM15.0477 16.8101C14.9613 16.8102 14.8759 16.8272 14.7961 16.8603C14.7164 16.8934 14.644 16.9419 14.5829 17.0029C14.5219 17.064 14.4736 17.1365 14.4406 17.2163C14.4076 17.2961 14.3906 17.3815 14.3907 17.4679C14.3907 17.5542 14.4078 17.6397 14.4409 17.7194C14.4739 17.7991 14.5224 17.8716 14.5835 17.9326C14.6446 17.9936 14.7171 18.042 14.7968 18.075C14.8766 18.108 14.9621 18.1249 15.0484 18.1249C15.2228 18.1248 15.3899 18.0554 15.5131 17.9321C15.6364 17.8087 15.7055 17.6415 15.7054 17.4671C15.7053 17.2928 15.636 17.1256 15.5126 17.0024C15.3893 16.8792 15.222 16.81 15.0477 16.8101ZM18.0844 14.9876C17.9156 14.9957 17.7564 15.0684 17.6398 15.1908C17.5231 15.3131 17.4581 15.4756 17.4581 15.6446C17.4581 15.8136 17.5231 15.9762 17.6398 16.0985C17.7564 16.2208 17.9156 16.2936 18.0844 16.3016C18.2532 16.2936 18.4125 16.2208 18.5291 16.0985C18.6457 15.9762 18.7108 15.8136 18.7108 15.6446C18.7108 15.4756 18.6457 15.3131 18.5291 15.1908C18.4125 15.0684 18.2532 14.9957 18.0844 14.9876ZM12.0109 18.6326C11.8434 18.6424 11.686 18.7159 11.5709 18.8379C11.4557 18.96 11.3916 19.1215 11.3916 19.2892C11.3916 19.457 11.4557 19.6185 11.5709 19.7405C11.686 19.8626 11.8434 19.9361 12.0109 19.9459C12.185 19.9457 12.3519 19.8765 12.475 19.7535C12.5982 19.6305 12.6675 19.4637 12.6679 19.2896C12.6677 19.1154 12.5984 18.9484 12.4753 18.8253C12.3521 18.7021 12.1851 18.6328 12.0109 18.6326ZM12.0109 14.9876C11.9245 14.9877 11.839 15.0047 11.7592 15.0378C11.6795 15.0709 11.607 15.1194 11.5459 15.1805C11.4849 15.2417 11.4365 15.3142 11.4035 15.394C11.3705 15.4738 11.3535 15.5594 11.3535 15.6457C11.3536 15.7321 11.3707 15.8176 11.4038 15.8974C11.4369 15.9772 11.4854 16.0497 11.5465 16.1107C11.6076 16.1718 11.6801 16.2202 11.7599 16.2532C11.8398 16.2862 11.9253 16.3032 12.0117 16.3031C12.1861 16.303 12.3534 16.2336 12.4767 16.1102C12.5999 15.9868 12.6691 15.8194 12.669 15.645C12.6689 15.4706 12.5996 15.3033 12.4761 15.18C12.3527 15.0567 12.1854 14.9875 12.0109 14.9876ZM8.97342 9.52087C8.80592 9.53068 8.6485 9.60414 8.53337 9.7262C8.41825 9.84826 8.35413 10.0097 8.35413 10.1775C8.35413 10.3453 8.41825 10.5067 8.53337 10.6288C8.6485 10.7509 8.80592 10.8243 8.97342 10.8341C9.1398 10.8229 9.2957 10.7488 9.40957 10.627C9.52343 10.5052 9.58678 10.3446 9.58678 10.1779C9.58678 10.0111 9.52343 9.85058 9.40957 9.72874C9.2957 9.60691 9.1398 9.53288 8.97342 9.52162V9.52087ZM8.97342 16.8101C8.80592 16.8199 8.6485 16.8934 8.53337 17.0154C8.41825 17.1375 8.35413 17.299 8.35413 17.4667C8.35413 17.6345 8.41825 17.796 8.53337 17.918C8.6485 18.0401 8.80592 18.1136 8.97342 18.1234C9.14092 18.1136 9.29835 18.0401 9.41347 17.918C9.52859 17.796 9.59272 17.6345 9.59272 17.4667C9.59272 17.299 9.52859 17.1375 9.41347 17.0154C9.29835 16.8934 9.14092 16.8199 8.97342 16.8101Z" fill={color} /></svg>;
}
export default bcio;