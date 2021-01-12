import * as React from "react";

function Logo(props) {
  return (
    <svg
      viewBox="0 0 251 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M237.805.385l11.406 6.15c1.496.807 1.496 2.623 0 3.43L247.291 11l1.92 1.036c1.496.806 1.496 2.622 0 3.428l-1.92 1.036 1.92 1.035c1.496.808 1.496 2.622 0 3.43l-11.406 6.15c-.953.513-2.324.513-3.277 0l-11.406-6.15c-1.496-.808-1.496-2.622 0-3.43l1.921-1.035-1.921-1.036c-1.496-.806-1.496-2.622 0-3.428L225.043 11l-1.921-1.036c-1.496-.806-1.496-2.622 0-3.428l11.406-6.15c.953-.514 2.324-.514 3.277 0zm0 15.73l6.568-3.542 2.183 1.177-2.183 1.177-2.917 1.573-5.027 2.71c-.097.053-.428.053-.525 0l-5.027-2.71-2.917-1.573-2.183-1.177 2.183-1.177 6.568 3.542c.953.513 2.324.513 3.277 0zm-9.845 1.958l-2.183 1.177 10.127 5.46c.097.053.428.053.525 0l10.127-5.46-2.183-1.177-6.568 3.542c-.953.513-2.324.513-3.277 0l-6.568-3.542zm7.944-15.284c.097-.052.428-.052.525 0l10.127 5.461-10.127 5.46c-.097.053-.428.053-.525 0l-10.127-5.46 10.127-5.46z"
        fill="#7F7FFB"
      />
      <path
        d="M5.8 17.84H.234V15.2h14.256v2.64H8.92V32H5.8V17.84zm21.478 7.824c0 .208-.016.504-.048.888H17.174c.176.944.632 1.696 1.368 2.256.752.544 1.68.816 2.784.816 1.408 0 2.568-.464 3.48-1.392l1.608 1.848a5.418 5.418 0 01-2.184 1.56c-.88.352-1.872.528-2.976.528-1.408 0-2.648-.28-3.72-.84-1.072-.56-1.904-1.336-2.496-2.328-.576-1.008-.864-2.144-.864-3.408 0-1.248.28-2.368.84-3.36a6.104 6.104 0 012.376-2.352c1.008-.56 2.144-.84 3.408-.84 1.248 0 2.36.28 3.336.84a5.667 5.667 0 012.304 2.328c.56.992.84 2.144.84 3.456zm-6.48-4.224c-.96 0-1.776.288-2.448.864-.656.56-1.056 1.312-1.2 2.256h7.272c-.128-.928-.52-1.68-1.176-2.256-.656-.576-1.472-.864-2.448-.864zm15.241 10.728c-1.328 0-2.52-.28-3.576-.84A6.194 6.194 0 0129.991 29c-.592-1.008-.888-2.144-.888-3.408 0-1.264.296-2.392.888-3.384a6.235 6.235 0 012.448-2.328c1.056-.56 2.256-.84 3.6-.84 1.264 0 2.368.256 3.312.768a4.968 4.968 0 012.16 2.208l-2.304 1.344c-.368-.592-.832-1.032-1.392-1.32a3.627 3.627 0 00-1.8-.456c-1.12 0-2.048.368-2.784 1.104-.736.72-1.104 1.688-1.104 2.904s.36 2.192 1.08 2.928c.736.72 1.672 1.08 2.808 1.08.656 0 1.256-.144 1.8-.432.56-.304 1.024-.752 1.392-1.344l2.304 1.344a5.248 5.248 0 01-2.184 2.232c-.944.512-2.04.768-3.288.768zM51.26 19.04c1.617 0 2.913.472 3.889 1.416.975.944 1.463 2.344 1.463 4.2V32h-3v-6.96c0-1.12-.264-1.96-.791-2.52-.529-.576-1.28-.864-2.257-.864-1.104 0-1.976.336-2.616 1.008-.64.656-.96 1.608-.96 2.856V32h-3V14.192h3v6.48a4.777 4.777 0 011.825-1.2c.736-.288 1.552-.432 2.448-.432zm16.43 0c1.616 0 2.912.472 3.888 1.416s1.464 2.344 1.464 4.2V32h-3v-6.96c0-1.12-.264-1.96-.792-2.52-.528-.576-1.28-.864-2.256-.864-1.104 0-1.976.336-2.616 1.008-.64.656-.96 1.608-.96 2.856V32h-3V19.184h2.856v1.656a4.69 4.69 0 011.872-1.344c.752-.304 1.6-.456 2.544-.456zm9.158.144h3V32h-3V19.184zm1.512-2.112c-.544 0-1-.168-1.368-.504a1.724 1.724 0 01-.552-1.296c0-.512.184-.936.552-1.272.368-.352.824-.528 1.368-.528.544 0 1 .168 1.368.504.368.32.552.728.552 1.224 0 .528-.184.976-.552 1.344-.352.352-.808.528-1.368.528zm11.305 15.096c-1.328 0-2.52-.28-3.576-.84A6.194 6.194 0 0183.616 29c-.592-1.008-.888-2.144-.888-3.408 0-1.264.296-2.392.888-3.384a6.235 6.235 0 012.448-2.328c1.056-.56 2.256-.84 3.6-.84 1.264 0 2.368.256 3.312.768a4.968 4.968 0 012.16 2.208l-2.304 1.344c-.368-.592-.832-1.032-1.392-1.32a3.627 3.627 0 00-1.8-.456c-1.12 0-2.048.368-2.784 1.104-.736.72-1.104 1.688-1.104 2.904s.36 2.192 1.08 2.928c.736.72 1.672 1.08 2.808 1.08.656 0 1.256-.144 1.8-.432.56-.304 1.024-.752 1.392-1.344l2.304 1.344a5.248 5.248 0 01-2.184 2.232c-.944.512-2.04.768-3.288.768zm12.962-13.128c1.888 0 3.328.456 4.32 1.368 1.008.896 1.512 2.256 1.512 4.08V32h-2.832v-1.56c-.368.56-.896.992-1.584 1.296-.672.288-1.488.432-2.448.432s-1.8-.16-2.52-.48c-.72-.336-1.28-.792-1.68-1.368a3.582 3.582 0 01-.576-1.992c0-1.152.424-2.072 1.272-2.76.864-.704 2.216-1.056 4.056-1.056h3.312v-.192c0-.896-.272-1.584-.816-2.064-.528-.48-1.32-.72-2.376-.72-.72 0-1.432.112-2.136.336-.688.224-1.272.536-1.752.936l-1.176-2.184c.672-.512 1.48-.904 2.424-1.176a10.79 10.79 0 013-.408zm-.408 10.944c.752 0 1.416-.168 1.992-.504a2.85 2.85 0 001.248-1.488v-1.488h-3.096c-1.728 0-2.592.568-2.592 1.704 0 .544.216.976.648 1.296.432.32 1.032.48 1.8.48zm10.09-15.792h3V32h-3V14.192zm19.066 18.048c-1.296 0-2.552-.184-3.768-.552-1.2-.368-2.152-.856-2.856-1.464l1.08-2.424c.688.544 1.528.992 2.52 1.344a9.513 9.513 0 003.024.504c1.248 0 2.176-.2 2.784-.6.624-.4.936-.928.936-1.584 0-.48-.176-.872-.528-1.176-.336-.32-.768-.568-1.296-.744a29.16 29.16 0 00-2.16-.6c-1.28-.304-2.32-.608-3.12-.912a5.283 5.283 0 01-2.04-1.416c-.56-.656-.84-1.536-.84-2.64 0-.928.248-1.768.744-2.52.512-.768 1.272-1.376 2.28-1.824 1.024-.448 2.272-.672 3.744-.672 1.024 0 2.032.128 3.024.384s1.848.624 2.568 1.104l-.984 2.424a9.707 9.707 0 00-2.304-.984 8.618 8.618 0 00-2.328-.336c-1.232 0-2.152.208-2.76.624-.592.416-.888.968-.888 1.656 0 .48.168.872.504 1.176.352.304.792.544 1.32.72a29.16 29.16 0 002.16.6c1.248.288 2.272.592 3.072.912.8.304 1.48.776 2.04 1.416.576.64.864 1.504.864 2.592 0 .928-.256 1.768-.768 2.52-.496.752-1.256 1.352-2.28 1.8-1.024.448-2.272.672-3.744.672zm21.646-6.576c0 .208-.016.504-.048.888h-10.056c.176.944.632 1.696 1.368 2.256.752.544 1.68.816 2.784.816 1.408 0 2.568-.464 3.48-1.392l1.608 1.848a5.418 5.418 0 01-2.184 1.56c-.88.352-1.872.528-2.976.528-1.408 0-2.648-.28-3.72-.84-1.072-.56-1.904-1.336-2.496-2.328-.576-1.008-.864-2.144-.864-3.408 0-1.248.28-2.368.84-3.36a6.104 6.104 0 012.376-2.352c1.008-.56 2.144-.84 3.408-.84 1.248 0 2.36.28 3.336.84a5.667 5.667 0 012.304 2.328c.56.992.84 2.144.84 3.456zm-6.48-4.224c-.96 0-1.776.288-2.448.864-.656.56-1.056 1.312-1.2 2.256h7.272c-.128-.928-.52-1.68-1.176-2.256-.656-.576-1.472-.864-2.448-.864zm12.218-.384c.864-1.344 2.384-2.016 4.56-2.016v2.856a3.808 3.808 0 00-.696-.072c-1.168 0-2.08.344-2.736 1.032-.656.672-.984 1.648-.984 2.928V32h-3V19.184h2.856v1.872zm19.573-1.872L172.835 32h-3.096l-5.496-12.816h3.12l3.984 9.504 4.104-9.504h2.88zm1.875 0h3V32h-3V19.184zm1.512-2.112c-.544 0-1-.168-1.368-.504a1.724 1.724 0 01-.552-1.296c0-.512.184-.936.552-1.272.368-.352.824-.528 1.368-.528.544 0 1 .168 1.368.504.368.32.552.728.552 1.224 0 .528-.184.976-.552 1.344-.352.352-.808.528-1.368.528zm11.306 15.096c-1.328 0-2.52-.28-3.576-.84A6.194 6.194 0 01186.976 29c-.592-1.008-.888-2.144-.888-3.408 0-1.264.296-2.392.888-3.384a6.235 6.235 0 012.448-2.328c1.056-.56 2.256-.84 3.6-.84 1.264 0 2.368.256 3.312.768a4.968 4.968 0 012.16 2.208l-2.304 1.344c-.368-.592-.832-1.032-1.392-1.32a3.627 3.627 0 00-1.8-.456c-1.12 0-2.048.368-2.784 1.104-.736.72-1.104 1.688-1.104 2.904s.36 2.192 1.08 2.928c.736.72 1.672 1.08 2.808 1.08.656 0 1.256-.144 1.8-.432.56-.304 1.024-.752 1.392-1.344l2.304 1.344a5.248 5.248 0 01-2.184 2.232c-.944.512-2.04.768-3.288.768zm19.926-6.504c0 .208-.016.504-.048.888h-10.056c.176.944.632 1.696 1.368 2.256.752.544 1.68.816 2.784.816 1.408 0 2.568-.464 3.48-1.392l1.608 1.848a5.418 5.418 0 01-2.184 1.56c-.88.352-1.872.528-2.976.528-1.408 0-2.648-.28-3.72-.84-1.072-.56-1.904-1.336-2.496-2.328-.576-1.008-.864-2.144-.864-3.408 0-1.248.28-2.368.84-3.36a6.104 6.104 0 012.376-2.352c1.008-.56 2.144-.84 3.408-.84 1.248 0 2.36.28 3.336.84a5.667 5.667 0 012.304 2.328c.56.992.84 2.144.84 3.456zm-6.48-4.224c-.96 0-1.776.288-2.448.864-.656.56-1.056 1.312-1.2 2.256h7.272c-.128-.928-.52-1.68-1.176-2.256-.656-.576-1.472-.864-2.448-.864z"
        fill="#001847"
      />
    </svg>
  );
}

export default Logo;