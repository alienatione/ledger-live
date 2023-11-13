
      // @ts-nocheck

      import * as React from "react";
interface Props {
            size: number;
            color?: string;
          };
function waifu({size, color = "currentColor"}: Props) {
  return <svg width={size} height={size} viewBox="0 0 24 24"><g><path d="M11.294 0.356C11.257 0.359 11.107 0.372 10.96 0.383C6.675 0.711 2.602 3.92 1.165 8.097C0.604 9.729 0.443 10.977 0.534 12.996C0.565 13.704 0.778 14.879 0.99 15.519C1.555 17.23 2.354 18.673 3.35 19.783C4.189 20.719 5.519 21.872 5.916 22.009C5.96 22.024 6.029 22.064 6.069 22.099C6.414 22.394 8.001 23.117 8.901 23.389C10.143 23.764 10.877 23.841 12.742 23.79C13.722 23.764 13.924 23.738 14.852 23.52C16.402 23.156 18.377 22.112 19.66 20.977C21.589 19.27 22.749 17.299 23.391 14.636C23.739 13.189 23.73 10.819 23.369 9.354C22.336 5.148 19.25 1.907 15.157 0.727C14.189 0.448 12.277 0.264 11.294 0.356M12.792 0.61C13.998 0.67 14.539 0.762 15.519 1.081C19.477 2.367 22.57 5.944 23.284 10.059C23.501 11.319 23.433 13.607 23.142 14.764C22.015 19.246 18.73 22.464 14.298 23.427C13.317 23.64 11.424 23.686 10.336 23.522C8.842 23.298 7.072 22.598 5.742 21.708C4.826 21.095 3.269 19.53 2.669 18.62C0.515 15.352 0.087 11.356 1.511 7.784C2.973 4.115 6.13 1.486 9.987 0.727C10.623 0.602 11.697 0.557 12.792 0.61M11.136 0.917C7.78 1.069 4.383 3.208 2.595 6.295C1.832 7.613 1.148 9.698 1.138 10.735C1.134 11.094 1.163 11.059 1.223 10.63C1.874 6.018 5.328 2.309 9.893 1.32C11.154 1.046 13.458 1.099 14.737 1.431C17.915 2.255 20.427 4.299 21.973 7.322C22.157 7.681 22.236 7.819 22.25 7.804C22.32 7.735 21.461 6.084 21.065 5.523C20.331 4.482 19.076 3.267 18.08 2.633C15.974 1.29 13.948 0.79 11.136 0.917M11.418 1.634C11.376 1.637 11.243 1.649 11.123 1.66C5.01 2.208 0.654 8.095 1.891 14.136C2.034 14.835 2.286 15.653 2.347 15.615C2.375 15.597 2.356 15.513 2.24 15.142C1.967 14.277 1.845 13.351 1.845 12.152C1.845 10.461 2.078 9.315 2.697 7.95C2.85 7.613 2.957 7.344 2.957 7.297C2.957 7.28 2.987 7.254 3.023 7.24C3.077 7.217 3.092 7.196 3.117 7.111C3.184 6.884 3.565 6.295 3.722 6.177C3.767 6.145 3.845 6.033 3.951 5.855C4.12 5.568 4.254 5.399 4.311 5.399C4.361 5.399 4.439 5.496 4.674 5.848C5.22 6.669 5.694 7.121 6.376 7.47C6.656 7.613 6.676 7.587 6.445 7.383C6.239 7.199 6.072 7.086 5.968 7.058C5.928 7.047 5.895 7.027 5.895 7.014C5.895 6.979 5.809 6.903 5.676 6.819C5.407 6.649 5.05 6.222 5.194 6.242C5.291 6.256 5.244 6.18 4.994 5.921C4.606 5.519 4.521 5.354 4.636 5.23C4.695 5.168 4.752 5.182 5.132 5.35C5.88 5.681 6.268 5.761 6.982 5.734C7.4 5.718 7.557 5.69 7.62 5.621C7.697 5.538 7.784 5.583 7.784 5.706C7.784 5.79 7.833 5.814 7.868 5.746C7.905 5.673 7.948 5.664 8.131 5.69C8.304 5.715 8.332 5.705 8.363 5.609C8.39 5.527 8.475 5.476 8.61 5.462C8.738 5.449 8.746 5.468 8.719 5.726C8.692 5.983 8.695 6.314 8.727 6.526C8.798 6.995 8.909 7.211 8.909 6.878C8.909 6.713 8.961 6.397 9.051 6.01C9.087 5.858 9.125 5.669 9.137 5.59C9.171 5.365 9.174 5.364 9.769 5.303C10.369 5.242 10.712 5.179 11.561 4.97C12.013 4.86 11.97 4.853 12.005 5.042C12.053 5.298 12.16 5.534 12.214 5.502C12.241 5.485 12.218 5.269 12.162 5.042C12.101 4.791 12.101 4.791 12.528 4.686C13.066 4.553 13.163 4.434 12.679 4.498C12.516 4.52 12.52 4.5 12.695 4.428C12.85 4.364 12.937 4.355 13.011 4.398C13.1 4.448 13.154 4.434 13.241 4.335L13.322 4.245 13.31 4.323C13.293 4.435 13.322 4.455 13.464 4.43C13.649 4.397 13.792 4.333 13.883 4.242C13.981 4.143 13.988 4.142 14.074 4.217C14.154 4.287 14.17 4.286 14.474 4.166C14.8 4.039 14.809 4.041 14.946 4.307C15.086 4.578 15.179 4.665 15.243 4.589C15.283 4.54 15.248 4.474 15.091 4.304C14.769 3.959 14.857 3.923 16.417 3.758C16.5 3.749 16.789 3.741 17.059 3.74C17.882 3.738 18.017 3.787 18.594 4.294C18.896 4.561 19.061 4.693 19.091 4.693C19.139 4.693 19.155 4.762 19.123 4.839C19.035 5.051 18.616 5.647 18.513 5.707C18.453 5.743 18.43 5.788 18.429 5.869C18.429 5.895 18.405 5.929 18.367 5.955C18.069 6.161 17.341 6.858 17.371 6.907C17.464 7.058 18.661 5.933 19.036 5.344C19.292 4.94 19.491 4.741 19.426 4.95C19.4 5.039 19.432 5.061 19.487 4.992C19.541 4.924 19.551 4.927 19.564 5.013C19.587 5.148 19.64 5.217 20.219 5.853C20.705 6.388 21.169 7.132 21.425 7.784C21.467 7.893 21.553 8.087 21.614 8.213C21.912 8.821 22.072 9.527 21.934 9.624C21.808 9.713 21.694 9.636 21.357 9.236C20.912 8.705 20.755 8.711 20.307 9.274C19.899 9.785 19.65 9.823 19.358 9.417C19.314 9.356 19.285 9.397 19.318 9.473C19.363 9.581 19.258 9.626 19.174 9.536L19.136 9.495 19.035 9.582C18.98 9.629 18.788 9.816 18.611 9.997C18.003 10.611 17.832 10.749 17.739 10.694C17.697 10.67 17.661 10.666 17.56 10.677C17.449 10.687 17.428 10.684 17.378 10.647C17.293 10.584 17.265 10.605 17.265 10.73C17.265 11.042 16.811 10.526 16.34 9.682C16.147 9.336 16.138 9.322 16.115 9.346C16.098 9.363 16.154 9.537 16.285 9.871C16.316 9.953 16.06 9.84 15.874 9.69C15.77 9.606 15.736 9.589 15.646 9.579C15.573 9.57 15.489 9.539 15.382 9.48C15.246 9.407 15.22 9.399 15.187 9.42C15.166 9.432 15.146 9.443 15.143 9.443C15.14 9.443 15.137 9.334 15.136 9.2C15.135 8.928 15.101 8.745 14.938 8.127C14.886 7.933 14.819 7.676 14.787 7.555C14.696 7.205 14.594 6.746 14.55 6.473C14.489 6.106 14.47 6.149 14.47 6.653C14.47 7.179 14.466 7.155 14.792 8.537C14.924 9.098 15.012 9.596 14.977 9.596C14.955 9.596 14.9 9.467 14.754 9.067C14.553 8.51 14.51 8.442 14.475 8.615C14.441 8.787 14.427 8.801 14.315 8.789C14.186 8.776 14.174 8.796 14.256 8.896C14.386 9.056 14.39 9.094 14.316 9.473C14.226 9.94 14.216 9.93 14.775 9.907C15.533 9.877 15.771 9.885 15.898 9.944C16.296 10.131 16.757 10.689 17.083 11.382L17.192 11.612 17.027 12.603C16.757 14.223 16.727 14.34 16.571 14.379C16.394 14.422 16.398 14.514 16.577 14.502L16.674 14.496 16.674 14.566C16.674 14.732 16.033 14.736 15.581 14.572C15.409 14.509 15.419 14.498 15.676 14.469C15.785 14.457 15.859 14.42 15.821 14.398C15.757 14.361 15.348 14.266 15.322 14.283C15.247 14.33 15.253 15.458 15.331 16.121C15.426 16.923 15.348 17.226 15.046 17.227C14.877 17.227 14.723 17.11 14.867 17.09C14.904 17.084 14.91 17.069 14.92 16.96C14.927 16.892 14.959 16.751 14.992 16.645C15.09 16.326 15.098 16.245 15.079 15.681C15.038 14.454 15.055 14.117 15.162 14.102C15.331 14.078 15.35 13.405 15.192 13.086C15.073 12.846 14.98 12.581 14.909 12.286C14.825 11.929 14.803 11.921 14.756 12.23C14.713 12.516 14.713 12.506 14.756 12.506C14.821 12.506 14.845 12.533 14.92 12.695C15.131 13.144 15.142 13.26 15.017 13.67C14.888 14.093 14.873 14.308 14.928 14.862C15.051 16.058 14.928 16.777 14.488 17.446C14.382 17.608 14.265 17.744 13.931 18.105C13.685 18.368 13.693 18.423 13.957 18.286C14.163 18.178 14.34 18.032 14.595 17.762C14.879 17.462 14.914 17.437 15.06 17.437C15.236 17.437 15.362 17.35 15.478 17.147C15.603 16.927 15.617 16.759 15.57 16.018C15.543 15.6 15.541 15.034 15.567 14.968C15.589 14.908 15.64 14.904 15.706 14.957C15.769 15.007 15.779 15.006 15.836 14.94C15.936 14.827 16.163 14.849 16.207 14.976L16.23 15.042 16.354 15.042C16.506 15.042 16.502 15.04 16.529 15.199C16.557 15.371 16.578 15.357 16.628 15.132C16.698 14.819 16.826 14.624 16.826 14.832C16.826 15.054 16.691 15.781 16.614 15.966C16.557 16.104 16.966 16.308 17.102 16.209C17.166 16.162 17.126 16.127 17.001 16.118C16.781 16.101 16.779 16.056 16.96 15.005C17.395 12.477 17.58 11.315 17.552 11.288C17.526 11.26 17.497 11.291 17.436 11.411C17.334 11.613 17.276 11.582 17.292 11.332C17.311 11.037 17.388 10.817 17.473 10.818C17.572 10.818 17.676 10.86 17.738 10.927C17.848 11.044 18.15 10.885 18.344 10.607C18.427 10.49 18.466 10.452 18.528 10.426C18.662 10.372 18.708 10.328 18.856 10.103C19.102 9.729 19.143 9.723 19.696 9.988C20.053 10.159 20.006 10.191 20.489 9.466C20.652 9.223 20.794 9.024 20.807 9.024C20.904 9.024 21.256 9.53 21.424 9.91C21.549 10.196 21.503 10.191 21.897 9.966C22.234 9.772 22.263 9.721 22.186 9.455C21.787 8.097 21.135 6.715 20.512 5.904C19.952 5.177 18.929 4.14 18.296 3.663L18.062 3.487 17.306 3.497C15.637 3.519 14.103 3.811 11.656 4.569C10.104 5.051 9.626 5.174 8.929 5.273C7.558 5.47 6.298 5.4 5.267 5.07C4.902 4.954 4.77 4.883 4.795 4.817C4.82 4.753 4.984 4.775 5.475 4.914C6.301 5.147 7.072 5.241 7.98 5.221C8.587 5.209 9.066 5.145 9.112 5.071C9.148 5.011 9.065 5.004 8.218 4.993C7.223 4.979 6.785 4.948 6.143 4.844C5.377 4.72 5.233 4.636 5.442 4.437C5.899 3.998 8.398 3.363 10.283 3.205C10.414 3.195 10.564 3.182 10.617 3.177C10.67 3.172 11.214 3.154 11.828 3.139C13.011 3.108 13.706 3.081 14.051 3.052C14.604 3.007 15.046 3.013 15.405 3.072C15.612 3.106 16.063 3.21 16.063 3.223C16.063 3.231 15.864 3.282 15.62 3.337C14.935 3.492 14.702 3.551 14.672 3.579C14.618 3.629 14.703 3.629 14.98 3.576C15.493 3.48 15.539 3.472 15.806 3.443C15.953 3.428 16.404 3.406 16.808 3.395C17.604 3.373 17.783 3.36 17.795 3.325C17.821 3.246 16.116 2.41 15.475 2.186C14.349 1.794 12.43 1.533 11.418 1.634M14.4 2.081C14.622 2.183 14.782 2.243 15.243 2.395C16.222 2.717 17.208 3.097 17.208 3.153C17.208 3.163 17.194 3.166 17.177 3.159C17.121 3.138 16.35 3.033 15.441 2.922L14.55 2.814 14.413 2.547C14.279 2.285 14.217 2.107 14.239 2.051C14.254 2.013 14.251 2.013 14.4 2.081M12.458 2.164C13.521 2.265 14.251 2.452 14.363 2.653C14.527 2.947 13.654 2.925 13.46 2.63C13.397 2.536 13.373 2.55 13.373 2.681C13.373 2.854 13.298 2.866 11.99 2.889C11.675 2.895 11.21 2.905 10.956 2.911L10.493 2.923 10.493 2.542L10.493 2.16 10.697 2.14C10.985 2.112 12.073 2.127 12.458 2.164M10.355 2.28C10.458 2.353 10.404 2.632 10.266 2.743C10.218 2.781 10.182 2.83 10.173 2.867C10.151 2.954 10.037 2.987 9.608 3.034C8.679 3.135 8.028 3.27 6.845 3.607C6.468 3.715 5.941 3.853 5.909 3.853C5.747 3.853 8.209 2.604 8.485 2.547C8.519 2.54 8.591 2.494 8.648 2.443C8.738 2.361 8.813 2.308 8.841 2.308C8.903 2.308 8.816 2.512 8.709 2.619C8.606 2.723 8.585 2.763 8.585 2.869C8.585 2.998 8.611 2.993 8.776 2.836C9.12 2.506 10.157 2.142 10.355 2.28M13.132 4.591C13.125 4.606 13.134 4.699 13.151 4.795C13.168 4.892 13.203 5.154 13.229 5.379C13.305 6.034 13.376 6.232 13.431 5.935C13.489 5.612 13.214 4.374 13.132 4.591M15.219 5.086C15.206 5.098 15.419 5.735 15.466 5.826C15.506 5.902 15.534 5.864 15.526 5.746C15.522 5.686 15.526 5.655 15.538 5.662C15.602 5.697 15.874 5.962 16.052 6.158C16.266 6.395 16.325 6.443 16.378 6.423C16.433 6.401 16.289 6.226 15.816 5.733C15.543 5.45 15.325 5.198 15.283 5.117C15.261 5.074 15.24 5.065 15.219 5.086M15.637 5.185C15.616 5.219 16.463 6.15 16.565 6.203C16.736 6.295 16.485 5.974 16.023 5.509C15.704 5.188 15.659 5.15 15.637 5.185M9.018 5.449C9.033 5.488 8.916 6.08 8.866 6.215C8.761 6.505 8.753 6.111 8.854 5.59C8.884 5.441 8.982 5.356 9.018 5.449M12.361 5.479C12.283 5.596 12.068 5.744 11.908 5.79C11.867 5.802 11.865 5.799 11.877 5.736C11.892 5.658 11.826 5.609 11.706 5.609C11.623 5.609 11.608 5.635 11.594 5.798C11.574 6.034 11.488 6.06 11.266 5.895C11.084 5.761 11.054 5.784 11.143 5.986C11.205 6.127 11.107 6.431 10.915 6.691C10.805 6.841 10.787 6.808 10.685 6.276C10.595 5.802 10.531 5.537 10.503 5.514C10.398 5.427 10.44 5.951 10.589 6.584C10.653 6.858 10.656 6.887 10.619 6.887C10.559 6.887 10.367 6.62 10.15 6.23C9.867 5.724 9.813 5.712 9.932 6.181C10.038 6.599 10.367 7.04 10.871 7.436C11.019 7.553 11.093 7.531 11.009 7.396C10.942 7.285 10.963 7.202 11.156 6.791C11.208 6.681 11.28 6.506 11.315 6.402C11.413 6.115 11.546 5.998 11.588 6.164C11.61 6.254 11.569 6.484 11.463 6.85C11.421 7.001 11.384 7.138 11.383 7.154C11.369 7.301 11.729 6.839 11.91 6.476C11.983 6.328 12.023 6.222 12.131 5.876C12.151 5.812 12.151 5.814 12.142 5.904C12.079 6.527 12.143 6.607 12.304 6.105C12.437 5.69 12.556 5.625 12.663 5.906C12.714 6.043 12.803 6.163 12.994 6.362C13.329 6.712 13.33 6.728 13.041 7.425C12.896 7.774 12.889 7.796 12.914 7.812C12.944 7.83 13.04 7.683 13.168 7.426C13.295 7.169 13.317 7.148 13.316 7.283C13.314 7.799 13.116 8.798 12.951 9.124C12.88 9.263 12.938 9.239 13.127 9.051C13.23 8.948 13.321 8.869 13.327 8.876C13.343 8.892 13.22 9.103 13.039 9.367C12.796 9.725 12.743 9.844 12.829 9.844C12.845 9.844 12.883 9.807 12.914 9.763C13.095 9.502 13.155 9.513 13.02 9.782C12.919 9.984 12.827 10.059 12.691 10.051L12.583 10.045 12.58 10.104C12.574 10.207 12.348 10.558 12.271 10.583C12.221 10.6 12.253 10.543 12.363 10.426C12.485 10.294 12.492 10.281 12.449 10.245C12.377 10.186 11.891 10.319 11.79 10.426C11.698 10.524 11.796 10.572 12.006 10.531C12.142 10.505 12.156 10.515 12.084 10.589C11.939 10.74 11.264 10.768 11.389 10.618C11.402 10.601 11.447 10.582 11.486 10.576C11.738 10.535 11.647 10.405 11.307 10.32C11.017 10.246 10.97 10.202 10.97 9.998C10.97 9.903 10.836 9.783 10.591 9.655C9.915 9.3 9.409 8.751 9.335 8.295C9.321 8.201 9.327 8.202 9.583 8.331C9.738 8.408 9.787 8.419 9.787 8.375C9.787 8.365 9.665 8.226 9.517 8.066C9.146 7.666 9.097 7.582 9.215 7.555C9.254 7.546 9.264 7.531 9.269 7.473C9.274 7.395 9.339 7.332 9.472 7.277L9.547 7.246 9.595 7.305C9.637 7.357 9.652 7.364 9.706 7.353C9.785 7.337 9.791 7.386 9.719 7.461C9.655 7.527 9.666 7.564 9.779 7.669C9.869 7.751 9.892 7.753 9.892 7.682C9.892 7.647 9.9 7.642 9.949 7.649C10.094 7.669 10.12 7.663 10.127 7.607C10.131 7.565 10.143 7.555 10.18 7.555C10.307 7.555 10.277 7.425 10.104 7.232C10.031 7.149 9.998 7.095 9.99 7.042C9.983 7.001 9.948 6.89 9.911 6.794C9.836 6.601 9.83 6.553 9.876 6.502C9.905 6.469 9.903 6.465 9.857 6.422C9.805 6.373 9.796 6.347 9.778 6.192C9.766 6.09 9.726 6.028 9.669 6.028C9.649 6.028 9.593 5.99 9.546 5.941C9.42 5.815 9.405 5.843 9.458 6.11C9.482 6.228 9.501 6.339 9.501 6.358C9.5 6.406 9.556 6.509 9.71 6.752C9.783 6.866 9.848 6.982 9.856 7.011L9.869 7.064 9.76 7.055C9.554 7.038 9.487 6.92 9.359 6.345C9.294 6.05 9.234 5.876 9.197 5.876C9.067 5.876 9.166 6.409 9.381 6.854C9.45 6.998 9.503 7.119 9.499 7.122C9.461 7.154 9.125 7.254 9.044 7.258C8.986 7.26 8.937 7.272 8.933 7.283C8.924 7.312 8.994 7.443 9.04 7.482C9.109 7.54 9.114 7.833 9.046 7.856C8.982 7.877 8.798 7.62 8.621 7.261C8.484 6.985 8.462 6.956 8.42 7.011C8.325 7.136 8.452 7.456 8.763 7.875C9.072 8.291 9.131 8.396 9.197 8.635C9.299 9.006 9.56 9.548 9.689 9.657C9.795 9.746 9.73 10.357 9.575 10.701C9.503 10.862 9.475 10.864 9.462 10.71C9.449 10.554 9.412 10.561 9.342 10.731C8.926 11.751 8.603 12.381 8.424 12.525C8.302 12.623 8.021 13.083 8.035 13.161C8.052 13.247 8.085 13.214 8.381 12.805C8.513 12.622 8.55 12.598 8.525 12.707C8.509 12.776 8.408 13.08 8.358 13.207C8.346 13.237 8.337 13.306 8.337 13.36C8.336 13.488 8.293 13.579 8.151 13.755C8.006 13.934 7.694 14.244 7.677 14.227C7.609 14.159 7.678 13.561 7.834 12.859C8.061 11.835 8.05 11.696 7.795 12.375C7.432 13.337 7.211 14.246 7.237 14.661C7.26 15.055 7.51 15.79 7.592 15.709C7.607 15.694 7.602 15.664 7.575 15.603C7.518 15.474 7.491 15.265 7.491 14.947C7.49 14.54 7.502 14.513 7.789 14.274C7.871 14.208 7.867 14.221 7.753 14.396C7.594 14.642 7.627 14.648 7.905 14.423C8.192 14.191 8.249 14.113 8.182 14.046C8.091 13.955 8.684 13.553 9.605 13.078C10.407 12.665 10.701 12.478 10.848 12.284C11.033 12.042 11.329 12.008 11.511 12.21C11.692 12.41 11.554 12.782 11.298 12.782C11.132 12.782 11.077 12.944 10.977 13.741C10.943 14.005 10.926 14.051 10.899 13.946C10.881 13.877 10.85 13.87 10.833 13.931C10.817 13.99 10.817 14.83 10.833 14.938C10.844 15.011 10.852 15.023 10.888 15.02C10.942 15.014 10.959 15.066 11.008 15.395C11.108 16.055 11.383 17.288 11.524 17.708C11.57 17.845 11.57 17.841 11.515 17.827C11.449 17.81 11.439 17.846 11.477 17.958C11.522 18.087 11.54 18.109 11.59 18.097C11.628 18.087 11.631 18.093 11.63 18.195C11.629 18.39 11.798 18.671 11.903 18.649C11.953 18.638 11.994 18.658 12.121 18.76C12.27 18.878 12.262 18.792 12.093 18.448C11.942 18.14 11.847 17.877 11.847 17.771C11.847 17.716 11.834 17.688 11.789 17.646C11.71 17.572 11.687 17.493 11.609 17.017C11.512 16.436 11.44 16.086 11.364 15.844C11.139 15.124 11.133 13.809 11.352 13.487C11.402 13.417 11.41 13.39 11.4 13.33C11.377 13.183 11.527 12.973 11.653 12.973C11.711 12.973 11.738 12.993 11.865 13.126C11.98 13.246 12.023 13.278 12.066 13.278C12.116 13.278 12.118 13.282 12.108 13.345C12.099 13.403 12.103 13.416 12.139 13.429C12.196 13.451 12.234 13.497 12.296 13.622C12.368 13.764 12.552 14.011 12.572 13.991C12.581 13.981 12.571 13.923 12.55 13.86C12.527 13.792 12.516 13.721 12.522 13.683C12.535 13.6 12.428 13.387 12.235 13.113C12.154 13 12.026 12.817 11.949 12.708C11.82 12.526 11.81 12.505 11.821 12.438C11.842 12.305 11.685 12.038 11.587 12.038C11.508 12.038 11.599 11.685 11.77 11.319C11.899 11.045 11.919 11.127 11.808 11.475C11.723 11.745 11.719 11.785 11.775 11.807C11.812 11.821 11.826 11.844 11.836 11.908C11.851 12.004 11.938 12.147 12.031 12.229C12.113 12.3 12.15 12.286 12.095 12.204C11.909 11.921 11.894 11.688 12.047 11.472C12.082 11.422 12.135 11.347 12.164 11.307C12.204 11.252 12.211 11.23 12.193 11.212C12.163 11.182 12.116 11.212 12.076 11.286C11.996 11.43 11.953 11.335 12.013 11.147C12.055 11.015 12.042 11.003 11.842 10.992C11.507 10.976 11.424 11.022 11.313 11.288C11.192 11.579 11.088 11.767 11.015 11.822C10.977 11.852 10.881 11.929 10.802 11.996C10.566 12.193 10.236 12.368 9.586 12.64C8.869 12.94 8.621 13.091 8.559 13.264L8.53 13.344 8.529 13.274C8.525 13.091 8.824 12.431 9.475 11.189L9.565 11.017 10.238 10.684C10.987 10.316 10.944 10.325 10.963 10.529C10.988 10.806 11.075 10.844 11.666 10.845C12.59 10.845 12.889 10.574 13.266 9.396C13.526 8.584 13.629 8.324 13.695 8.303C13.736 8.289 13.706 8.416 13.629 8.584C13.546 8.764 13.57 8.799 13.678 8.654C13.78 8.52 13.812 8.414 13.798 8.263C13.789 8.156 13.791 8.146 13.825 8.146C13.962 8.146 14.049 7.754 14.05 7.125C14.05 6.734 14.023 6.488 13.974 6.449C13.933 6.413 13.927 6.448 13.908 6.843C13.871 7.623 13.728 8.093 13.389 8.55C13.335 8.622 13.29 8.68 13.287 8.68C13.284 8.68 13.312 8.597 13.348 8.495C13.571 7.873 13.52 6.206 13.28 6.234C13.2 6.242 12.783 5.769 12.807 5.696C12.811 5.685 12.848 5.669 12.888 5.659C13.014 5.632 13.019 5.629 12.998 5.607C12.934 5.543 12.616 5.532 12.562 5.59C12.491 5.669 12.434 5.641 12.441 5.53C12.449 5.409 12.419 5.39 12.361 5.479M18.892 5.812C18.821 5.885 18.644 6.071 18.498 6.226C18.221 6.521 18 6.726 17.756 6.914C17.543 7.079 17.588 7.123 17.813 6.97C18.244 6.676 18.599 6.331 18.971 5.841C19.111 5.657 19.06 5.637 18.892 5.812M4.626 6.181C4.583 6.252 5.143 6.994 5.502 7.341C5.928 7.753 6.689 8.129 7.213 8.186C7.41 8.207 7.444 8.216 7.536 8.272C7.573 8.295 7.623 8.298 7.774 8.289C7.977 8.276 8.047 8.291 8.12 8.358C8.171 8.406 8.212 8.367 8.192 8.29C8.175 8.22 8.119 8.19 7.975 8.176C7.564 8.133 6.649 7.849 6.279 7.649C5.87 7.428 5.254 6.873 4.792 6.309C4.674 6.163 4.649 6.145 4.626 6.181M12.4 6.736C12.021 6.778 11.6 6.992 11.6 7.145C11.6 7.203 11.66 7.201 11.712 7.14C11.813 7.02 11.937 6.996 12.08 7.071C12.155 7.109 12.146 7.128 12.045 7.147C11.927 7.169 11.903 7.209 11.952 7.299C12.027 7.439 12.11 7.433 12.277 7.277C12.419 7.144 12.489 7.111 12.594 7.128C12.688 7.143 12.724 7.109 12.724 7.009C12.724 6.864 12.875 6.832 12.9 6.972C12.911 7.038 12.96 7.023 13.078 6.917C13.203 6.802 13.203 6.781 13.078 6.754C12.961 6.727 12.574 6.717 12.4 6.736M17.253 7.088C17.24 7.119 17.4 7.298 17.654 7.536C17.899 7.766 18.329 8.236 18.474 8.432C18.695 8.729 18.803 8.833 18.838 8.778C18.854 8.752 18.685 8.524 18.44 8.241C18.317 8.1 18.081 7.824 17.914 7.629C17.5 7.143 17.296 6.976 17.253 7.088M15.876 7.179C15.794 7.278 16.472 8.68 16.56 8.592C16.57 8.583 16.556 8.525 16.529 8.461C16.502 8.398 16.443 8.248 16.395 8.127C16.265 7.793 16.233 7.728 16.163 7.668C16.09 7.603 16.093 7.595 16.208 7.516C16.301 7.451 16.302 7.421 16.213 7.421C16.152 7.421 16.09 7.368 15.981 7.225C15.924 7.148 15.907 7.141 15.876 7.179M7.854 7.186C7.818 7.222 7.976 7.975 8.034 8.044C8.11 8.136 8.101 7.876 8.016 7.536C7.937 7.226 7.898 7.141 7.854 7.186M15.335 7.183C15.322 7.196 15.402 7.554 15.428 7.602C15.492 7.719 15.685 7.753 15.696 7.65C15.703 7.588 15.594 7.42 15.525 7.388C15.474 7.363 15.395 7.27 15.395 7.235C15.395 7.211 15.348 7.17 15.335 7.183M8.197 7.738C8.155 7.781 8.201 8.016 8.302 8.266C8.348 8.381 8.375 8.476 8.371 8.513C8.366 8.563 8.373 8.575 8.413 8.585C8.451 8.594 8.461 8.609 8.461 8.652C8.461 8.716 8.501 8.729 8.534 8.676C8.561 8.635 8.539 8.558 8.434 8.323C8.391 8.225 8.334 8.062 8.306 7.96C8.256 7.778 8.224 7.713 8.197 7.738M15.744 8.213C15.667 8.267 15.695 8.526 15.78 8.543C15.873 8.561 16.015 8.333 15.967 8.244C15.932 8.183 15.812 8.166 15.744 8.213M13.921 8.523C13.826 8.628 13.603 9.19 13.597 9.337C13.584 9.657 13.854 9.128 13.965 8.616C13.988 8.51 13.968 8.471 13.921 8.523M16.226 8.564C16.205 8.599 16.56 9.464 16.751 9.844C16.877 10.095 17.143 10.414 17.116 10.283C17.096 10.181 16.296 8.564 16.261 8.552C16.249 8.548 16.233 8.553 16.226 8.564M12.818 8.762C12.433 9.197 11.832 9.707 11.453 9.919C11.231 10.043 11.215 10.053 11.228 10.073C11.252 10.112 11.5 10.094 11.62 10.045C12.031 9.878 12.613 9.35 12.881 8.9C12.998 8.705 13.028 8.604 12.973 8.604C12.964 8.604 12.894 8.674 12.818 8.762M8.592 8.804C8.559 8.89 9.079 9.43 9.312 9.55C9.456 9.624 9.374 9.512 9.02 9.15C8.66 8.785 8.614 8.746 8.592 8.804M11.475 8.901C11.253 8.999 11.109 9.028 10.884 9.021C10.668 9.013 10.609 9.052 10.748 9.11C10.976 9.205 11.752 8.99 11.668 8.855C11.649 8.824 11.648 8.825 11.475 8.901M7.955 9.072C7.941 9.089 7.911 9.142 7.888 9.192C7.662 9.681 6.4 11.181 6.091 11.328C6.006 11.369 5.989 11.348 5.92 11.123C5.843 10.865 5.69 10.613 5.643 10.661C5.574 10.729 5.613 11.027 5.801 11.879C6.01 12.834 5.994 12.868 5.53 12.453C5.265 12.216 5.255 12.185 5.325 11.82C5.36 11.639 5.365 11.564 5.356 11.302C5.344 10.927 5.355 10.885 5.506 10.744C5.626 10.631 5.624 10.597 5.493 10.577C5.257 10.54 5.11 10.79 5.075 11.285C5.046 11.719 5.025 11.728 4.734 11.425C3.984 10.644 3.558 10.377 3.281 10.518C3.157 10.58 3.216 10.644 3.489 10.738C3.766 10.834 3.928 10.955 4.083 11.18C4.209 11.365 4.356 11.486 4.826 11.795C5.184 12.031 5.17 12.044 4.71 11.907C4.143 11.738 3.949 11.744 3.857 11.931C3.827 11.992 3.841 12.058 3.877 12.022C3.921 11.979 3.952 12.001 3.999 12.108C4.062 12.249 4.221 12.779 4.272 13.016C4.366 13.453 4.605 13.806 4.721 13.68C4.756 13.64 4.747 13.603 4.702 13.603C4.54 13.603 4.285 12.317 4.41 12.134C4.518 11.976 4.97 12.046 5.03 12.231C5.05 12.289 5.096 12.763 5.084 12.778C5.082 12.781 4.98 12.734 4.857 12.675C4.456 12.479 4.515 12.587 5.004 12.946C5.262 13.136 5.272 13.135 5.234 12.925C5.143 12.418 5.221 12.35 5.544 12.652C5.802 12.892 5.849 12.914 5.938 12.832C6.036 12.741 6.111 12.536 6.133 12.295C6.155 12.06 6.198 11.991 6.678 11.447C6.821 11.284 6.961 11.115 6.988 11.072C7.067 10.947 7.364 10.806 7.364 10.894C7.364 10.966 7.062 11.627 6.611 12.544C6.244 13.288 6.123 13.483 6.045 13.459C5.994 13.442 5.986 13.481 6.026 13.56C6.091 13.686 6.116 13.695 6.19 13.62C6.362 13.445 7.186 11.916 7.397 11.38C7.559 10.969 7.724 10.519 7.822 10.225C8.004 9.681 7.978 9.688 7.5 10.31C7.147 10.769 6.175 11.766 5.955 11.894C5.872 11.942 6.059 11.707 6.518 11.185C7.454 10.122 7.917 9.504 8.006 9.2C8.044 9.065 8.018 8.996 7.955 9.072M8.423 9.425C8.393 9.481 8.384 9.485 8.32 9.476C8.163 9.455 8.131 9.602 8.268 9.716C8.306 9.746 8.306 9.75 8.275 9.769C8.219 9.802 8.19 9.884 8.177 10.044C8.158 10.252 8.122 10.432 8.001 10.93C7.942 11.165 7.89 11.417 7.884 11.488C7.871 11.642 7.851 11.663 7.789 11.588C7.744 11.533 7.743 11.533 7.716 11.571C7.646 11.668 7.437 11.935 7.32 12.079C6.715 12.821 6.218 13.835 6.352 14.056C6.424 14.172 6.443 14.144 6.479 13.865C6.542 13.387 6.736 13.037 7.394 12.22C7.806 11.706 7.82 11.731 7.498 12.398C7.253 12.907 7.193 13.047 7.144 13.216C7.086 13.422 6.755 13.972 6.606 14.112C6.384 14.32 6.659 14.274 6.958 14.054C7.099 13.95 7.123 13.905 7.23 13.564C7.535 12.59 7.861 11.847 7.985 11.847C8.182 11.847 8.527 10.374 8.505 9.63C8.498 9.38 8.476 9.322 8.423 9.425M10.135 9.762C10.547 9.993 10.658 10.19 10.421 10.273C10.219 10.345 10.186 10.365 10.16 10.427C10.108 10.549 9.923 10.764 9.967 10.65C10.021 10.513 9.979 10.359 9.902 10.406C9.893 10.412 9.879 10.406 9.871 10.392C9.864 10.379 9.863 10.374 9.871 10.38C9.888 10.395 9.997 10.301 9.997 10.272C9.997 10.26 9.979 10.235 9.958 10.216C9.897 10.161 9.878 10.048 9.893 9.84C9.907 9.62 9.89 9.625 10.135 9.762M14.041 9.879C14.009 9.903 13.995 9.94 13.988 10.014C13.976 10.139 13.948 10.152 13.859 10.075C13.786 10.01 13.716 9.999 13.677 10.046C13.638 10.092 13.679 10.141 13.753 10.135C13.851 10.127 13.848 10.141 13.566 10.915C13.46 11.209 13.359 11.53 13.226 12.009C13.168 12.219 13.158 12.228 13.058 12.152C12.871 12.013 12.851 11.743 12.99 11.274C13.019 11.174 13.083 10.969 13.131 10.816C13.228 10.508 13.242 10.434 13.206 10.421C13.18 10.412 13.105 10.566 12.991 10.86C12.904 11.079 12.9 11.073 12.911 10.763C12.927 10.332 12.841 10.378 12.672 10.893C12.474 11.495 12.471 12.592 12.666 13.106C12.762 13.361 12.877 13.389 12.804 13.141C12.735 12.908 12.705 12.095 12.766 12.095C12.775 12.095 12.782 12.099 12.782 12.104C12.782 12.275 12.947 12.893 13.046 13.095C13.286 13.581 13.6 13.986 13.896 14.192C14.048 14.297 14.064 14.272 13.935 14.13C13.264 13.393 13.281 12.342 13.993 10.553C14.207 10.016 14.238 9.909 14.184 9.871C14.135 9.835 14.092 9.837 14.041 9.879M22.377 9.874C22.33 9.93 22.337 10.103 22.404 10.608C22.494 11.272 22.507 11.231 22.066 11.663C21.695 12.028 21.549 12.13 21.354 12.161C21.18 12.19 20.604 12.009 19.44 11.562C17.955 10.99 17.911 10.98 17.867 11.198C17.682 12.136 17.299 14.382 17.15 15.412C17.023 16.289 17.145 16.174 17.388 15.187C17.553 14.518 17.712 13.66 17.894 12.458C18.072 11.278 18.042 11.369 18.231 11.423C18.799 11.585 18.846 11.655 18.715 12.156C18.516 12.915 18.399 13.459 18.334 13.917C18.283 14.284 18.245 14.475 18.196 14.61C18.164 14.701 18.158 14.774 18.154 15.061C18.15 15.329 18.135 15.496 18.088 15.812C18.026 16.234 18.015 16.378 18.046 16.397C18.099 16.429 18.203 15.948 18.601 13.841C18.963 11.922 19.039 11.605 19.13 11.621C19.192 11.633 19.177 11.753 18.974 12.85C18.864 13.448 18.705 14.318 18.621 14.785C18.535 15.252 18.427 15.838 18.378 16.088C18.281 16.593 18.283 16.616 18.415 16.616C18.49 16.616 18.721 16.676 19.084 16.789C19.249 16.841 19.398 16.884 19.411 16.884C19.556 16.884 19.213 16.703 18.868 16.597C18.61 16.517 18.571 16.497 18.546 16.424C18.496 16.283 18.547 15.891 18.727 15.015C19.007 13.649 19.225 12.436 19.243 12.143C19.263 11.808 19.313 11.783 19.683 11.926C19.796 11.97 20.074 12.076 20.302 12.162C20.959 12.411 20.929 12.378 20.89 12.81C20.857 13.169 20.857 13.171 20.88 13.179C20.891 13.182 20.932 13.062 20.97 12.912C21.104 12.394 21.088 12.412 21.407 12.403C21.532 12.4 21.634 12.401 21.634 12.405C21.634 12.41 21.617 12.542 21.595 12.697C21.495 13.438 21.684 13.238 21.852 12.425C21.905 12.17 22.03 12.015 22.302 11.867C22.327 11.853 22.329 11.919 22.321 12.427C22.31 13.084 22.309 13.091 22.168 13.114C21.955 13.148 21.342 13.558 21.372 13.646C21.388 13.695 21.442 13.676 21.553 13.584C21.698 13.463 21.742 13.461 21.888 13.568C22.025 13.668 22.024 13.687 21.877 13.844C21.846 13.877 21.826 13.914 21.834 13.926C21.849 13.95 22.038 13.807 22.15 13.685C22.267 13.558 22.267 13.561 22.147 14.099C22.02 14.665 21.986 14.742 21.821 14.825C21.687 14.893 21.681 14.903 21.653 15.134C21.627 15.352 21.639 15.428 21.701 15.457C22.042 15.612 22.457 13.876 22.502 12.104C22.515 11.583 22.534 11.41 22.589 11.32C22.763 11.039 22.56 9.653 22.377 9.874M15.025 10.171C15.021 10.186 14.986 10.361 14.949 10.559C14.807 11.325 14.66 11.674 14.294 12.113C14.114 12.329 14.094 12.399 14.234 12.321C14.592 12.119 14.957 11.491 15.061 10.899C15.116 10.582 15.087 9.984 15.025 10.171M20.423 10.187C20.391 10.237 20.67 10.564 21.081 10.957C21.322 11.188 21.382 11.205 21.263 11.008C20.98 10.543 20.496 10.069 20.423 10.187M20.289 10.34C20.283 10.351 20.375 10.469 20.495 10.602C20.803 10.947 21.01 11.215 21.184 11.495C21.358 11.775 21.409 11.84 21.44 11.82C21.519 11.771 20.932 10.947 20.491 10.486C20.353 10.344 20.308 10.31 20.289 10.34M18.821 10.433C18.777 10.507 20.053 11.021 20.231 11.001C20.323 10.991 20.326 10.992 20.284 11.021C20.195 11.082 20.225 11.129 20.466 11.306C20.589 11.397 20.756 11.526 20.836 11.593C21.077 11.792 21.021 11.701 20.73 11.416C20.419 11.112 20.384 11.056 20.53 11.094C20.689 11.137 20.661 11.074 20.48 10.984C19.972 10.731 18.865 10.364 18.821 10.433M3.14 10.738C3.058 10.869 3.18 12.186 3.294 12.406C3.391 12.596 3.772 12.915 3.901 12.916C3.933 12.916 3.996 12.934 4.043 12.955C4.345 13.092 3.932 12.651 3.604 12.485C3.398 12.382 3.407 12.414 3.393 11.705C3.38 11.061 3.365 10.946 3.279 10.805C3.234 10.73 3.165 10.697 3.14 10.738M18.765 10.949C18.745 10.98 19.55 11.326 19.767 11.38C19.879 11.408 19.836 11.349 19.69 11.276C19.34 11.1 18.79 10.906 18.765 10.949M12.902 11.103C12.888 11.155 12.877 11.151 12.877 11.093C12.877 11.066 12.885 11.048 12.894 11.054C12.904 11.06 12.907 11.082 12.902 11.103M10.008 11.158C9.983 11.198 10.23 11.31 10.602 11.428C10.802 11.491 10.883 11.493 10.834 11.435C10.767 11.353 10.038 11.11 10.008 11.158M11.77 12.396C11.77 12.41 11.763 12.416 11.752 12.41C11.742 12.403 11.733 12.38 11.733 12.357C11.734 12.309 11.77 12.349 11.77 12.396M10.521 12.694C10.163 12.842 9.598 13.155 9.631 13.187C9.688 13.244 10.753 12.714 10.712 12.649C10.695 12.622 10.692 12.622 10.521 12.694M19.64 13.191C19.357 13.296 19.46 13.589 19.887 13.893C20.028 13.993 20.621 14.293 20.647 14.276C20.689 14.251 20.664 14.233 20.175 13.959C19.85 13.778 19.809 13.719 19.957 13.647C20.061 13.598 20.085 13.57 20.117 13.465L20.141 13.383 20.261 13.383C20.402 13.383 20.426 13.354 20.334 13.298C20.163 13.192 19.791 13.135 19.64 13.191M12.628 13.566C12.552 13.708 12.896 14.407 13.019 14.359C13.079 14.336 13.043 14.226 12.864 13.871C12.69 13.525 12.667 13.495 12.628 13.566M10.487 13.746C9.993 14.043 9.385 14.693 9.146 15.177C8.872 15.735 8.786 16.15 8.785 16.931C8.784 17.565 8.784 17.563 8.671 17.894C8.584 18.151 8.653 18.106 8.813 17.804C8.942 17.561 9.1 17.439 9.129 17.558C9.177 17.745 8.278 18.657 7.819 18.888C7.321 19.139 6.532 19.105 6.216 18.82C6.175 18.782 6.123 18.754 6.097 18.754C6.029 18.754 5.948 18.645 5.829 18.4C5.533 17.793 5.573 17.146 5.956 16.378C6.163 15.961 6.389 15.648 6.879 15.097C7.185 14.753 7.227 14.614 7.027 14.613C6.957 14.612 6.84 14.558 6.746 14.482C6.665 14.417 6.6 14.407 6.563 14.451C6.518 14.505 6.591 14.573 6.793 14.668C7.017 14.771 7.014 14.763 6.86 14.83C6.702 14.898 6.56 15.04 6.3 15.386C6.189 15.533 6.075 15.68 6.046 15.714C5.954 15.821 5.722 16.306 5.455 16.956L5.335 17.248 5.407 17.557C5.496 17.936 5.611 18.3 5.698 18.473C5.783 18.641 5.775 18.654 5.641 18.57C5.453 18.453 5.468 18.516 5.673 18.705C6.224 19.214 6.409 19.287 7.192 19.304C7.481 19.311 7.728 19.323 7.742 19.332C7.787 19.362 7.803 19.439 7.832 19.781C7.863 20.136 7.871 20.192 7.949 20.602C8.021 20.976 8.019 20.984 7.794 21.215C7.601 21.415 7.581 21.457 7.672 21.488C7.755 21.518 7.818 21.486 7.985 21.329C8.138 21.185 8.184 21.158 8.328 21.134C8.386 21.124 8.384 21.058 8.321 20.893C8.118 20.367 8.045 18.963 8.221 18.963C8.29 18.963 8.313 18.935 8.33 18.828C8.347 18.71 8.354 18.699 8.543 18.511C8.636 18.419 8.795 18.243 8.897 18.12C9.149 17.816 9.215 17.766 9.215 17.876C9.215 17.961 9.279 18.075 9.352 18.118C9.418 18.157 9.437 18.188 9.49 18.336C9.533 18.457 9.634 18.567 9.858 18.739C10.307 19.083 10.409 19.128 10.89 19.195C11.234 19.244 11.256 19.241 11.256 19.145C11.256 19.017 11.339 19.085 11.358 19.228C11.384 19.422 11.491 19.456 11.535 19.283C11.61 18.987 11.692 19.079 11.627 19.387C11.496 20.014 11.276 20.604 11.172 20.604C11.086 20.604 11.04 20.679 10.922 21.02C10.804 21.358 10.807 21.367 11.027 21.367C11.179 21.367 11.256 21.405 11.352 21.525C11.456 21.655 11.579 21.908 11.596 22.026C11.605 22.091 11.618 22.12 11.637 22.12C11.718 22.12 11.664 21.897 11.512 21.595C11.456 21.483 11.397 21.341 11.38 21.279C11.364 21.217 11.334 21.152 11.313 21.135C11.257 21.088 11.265 21.081 11.374 21.081C11.689 21.081 11.899 21.404 12.019 22.072C12.08 22.418 12.103 22.456 12.188 22.348C12.41 22.065 12.05 21.232 11.561 20.898C11.487 20.848 11.423 20.793 11.418 20.774C11.392 20.692 11.624 20.139 11.847 19.752C11.997 19.492 12.006 19.451 11.924 19.38C11.787 19.26 11.988 19.084 12.393 18.964C12.522 18.928 12.593 18.883 12.558 18.862C12.55 18.857 12.41 18.87 12.247 18.89C11.381 18.997 11.015 18.95 10.407 18.658C9.512 18.228 9.072 17.492 9.072 16.426C9.072 15.403 9.466 14.633 10.326 13.98C10.529 13.825 10.648 13.717 10.635 13.695C10.618 13.669 10.606 13.674 10.487 13.746M4.932 13.762C4.859 13.815 5.115 14.547 5.199 14.522C5.251 14.506 5.179 14.141 5.107 14.064C5.076 14.031 5.066 13.993 5.063 13.906C5.058 13.751 5.014 13.702 4.932 13.762M21.328 14.084C21.075 14.171 20.956 14.23 20.968 14.261C21.002 14.345 21.686 14.134 21.668 14.045C21.658 13.989 21.577 13.999 21.328 14.084M12.657 14.162C12.632 14.226 12.721 14.604 12.858 15.009C13.113 15.772 13.213 16.141 13.468 17.265C13.615 17.915 13.658 18.066 13.696 18.066C13.738 18.066 13.754 17.986 13.767 17.716C13.78 17.437 13.796 17.375 13.821 17.509C13.836 17.588 13.865 17.633 13.891 17.617C13.922 17.597 13.912 17.159 13.879 17.132C13.856 17.113 13.844 17.113 13.822 17.131C13.744 17.196 13.689 17.052 13.565 16.454C13.422 15.768 13.344 15.506 13.254 15.403C13.202 15.344 13.197 15.33 13.218 15.297C13.288 15.187 13.08 14.671 12.837 14.346C12.655 14.104 12.673 14.121 12.657 14.162M6.072 14.574C5.904 14.704 5.832 14.734 5.729 14.721C5.654 14.711 5.64 14.716 5.573 14.776C5.485 14.856 5.485 14.856 5.392 14.793C5.277 14.715 5.269 14.75 5.351 14.995C5.39 15.112 5.434 15.212 5.449 15.218C5.495 15.235 6.251 14.535 6.227 14.497C6.211 14.47 6.198 14.476 6.072 14.574M19.44 14.884C19.224 14.919 19.134 15.01 19.258 15.069C19.313 15.096 19.391 15.088 19.57 15.04C19.614 15.028 19.615 15.03 19.602 15.135C19.59 15.226 19.593 15.244 19.62 15.255C19.67 15.274 19.706 15.224 19.718 15.119C19.724 15.066 19.747 15 19.768 14.97C19.841 14.867 19.725 14.836 19.44 14.884M21.773 15.61C21.762 15.623 21.717 15.707 21.673 15.797C21.628 15.885 21.546 16.025 21.49 16.106C21.379 16.268 21.383 16.298 21.505 16.232C21.681 16.135 21.925 15.63 21.813 15.592C21.802 15.588 21.783 15.596 21.773 15.61M2.674 15.839C2.544 15.997 2.608 16.569 2.757 16.569C2.816 16.569 2.784 16.363 2.709 16.252C2.638 16.146 2.638 16.139 2.715 16.139C2.797 16.139 2.866 16.091 2.858 16.038C2.854 16.005 2.841 15.997 2.801 16.001C2.752 16.007 2.75 16.003 2.753 15.917C2.757 15.82 2.72 15.785 2.674 15.839M10.9 15.863C10.858 15.973 11.074 17.03 11.151 17.093C11.213 17.145 11.199 17.053 11.056 16.427C11.009 16.222 10.966 16.008 10.959 15.954C10.945 15.848 10.921 15.811 10.9 15.863M6.299 16.249C6.131 16.556 6.052 16.743 6.08 16.771C6.112 16.803 6.446 16.189 6.47 16.054C6.489 15.951 6.417 16.032 6.299 16.249M4.923 16.221C4.854 16.406 4.822 17.216 4.881 17.319C4.932 17.41 4.95 17.356 4.962 17.064C4.968 16.907 4.987 16.719 5.004 16.645C5.066 16.381 4.999 16.023 4.923 16.221M17.493 16.344C17.442 16.477 17.503 16.565 17.57 16.455C17.626 16.365 17.637 16.369 17.686 16.497C17.861 16.96 17.931 17.226 17.893 17.298C17.85 17.378 18.077 17.702 18.294 17.874C18.445 17.994 18.433 17.946 18.081 17.046C17.857 16.471 17.573 16.132 17.493 16.344M21.631 17.24C21.586 17.303 21.492 17.451 21.425 17.569C20.871 18.529 19.6 19.897 18.495 20.723C17.085 21.776 15.451 22.465 13.755 22.719C13.009 22.832 11.833 22.896 11.861 22.824C11.894 22.736 12.251 22.666 12.763 22.645C13.235 22.626 13.469 22.596 13.974 22.491C14.418 22.397 14.766 22.34 14.882 22.34C15.012 22.34 15.178 22.29 15.303 22.212C15.374 22.169 15.44 22.143 15.486 22.142C15.6 22.138 15.699 21.958 15.595 21.943C15.573 21.94 15.338 21.993 15.07 22.061C13.786 22.389 12.958 22.497 11.942 22.466C10.64 22.426 9.858 22.293 8.786 21.927C7.884 21.619 7.842 21.606 7.818 21.63C7.728 21.72 8.222 21.996 9.181 22.392C9.265 22.427 9.275 22.458 9.2 22.444C9.171 22.439 9.04 22.417 8.909 22.396C8.715 22.365 8.617 22.336 8.384 22.24C8.227 22.177 7.953 22.069 7.774 22.002C6.631 21.571 5.446 20.728 3.982 19.308C3.741 19.074 3.759 19.16 4.013 19.45C5.456 21.104 7.875 22.446 10.13 22.844C14.12 23.549 18.115 22.05 20.645 18.897C21.134 18.286 21.801 17.215 21.734 17.147C21.72 17.133 21.688 17.162 21.631 17.24M5.76 17.65C5.686 17.789 5.866 18.46 6.019 18.612C6.095 18.688 6.117 18.646 6.06 18.532C5.997 18.404 5.962 18.273 5.906 17.956C5.846 17.616 5.814 17.548 5.76 17.65M13.197 20.609C13.076 20.757 13.028 20.892 13.074 20.956C13.142 21.048 13.255 20.931 13.31 20.712C13.358 20.511 13.312 20.469 13.197 20.609M13.728 20.62C13.689 20.683 14.294 21.236 14.346 21.184C14.36 21.17 14.278 21.078 14.081 20.884C13.816 20.624 13.754 20.578 13.728 20.62M14.836 21.627C14.814 21.65 14.822 21.705 14.851 21.729C14.866 21.742 14.881 21.783 14.885 21.821C14.892 21.915 14.922 21.916 15.069 21.83C15.296 21.696 15.271 21.615 15.004 21.615C14.918 21.615 14.843 21.62 14.836 21.627" stroke="none" fill={color} fillRule="evenodd" strokeWidth={0.059617500000000004} /></g></svg>;
}
export default waifu;