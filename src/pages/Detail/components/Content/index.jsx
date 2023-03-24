import axios from "axios";
import { useEffect, useState } from "react";
import { Collapse } from "reactstrap";

import iconUp from "../../../../assets/detail/fi_chevron-up.svg";
import iconPerson from "../../../../assets/detail/fi_users.svg";

import "./style.css";

const DETAIL_URL = "https://bootcamp-rent-cars.herokuapp.com/customer/car/2271";
const CAPACITY = {
  small: "2-4",
  medium: "4-6",
  large: "6-8",
};

const Content = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentData, setContentData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(DETAIL_URL);
      setContentData(response.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      Content
      {contentData?.image && (
        <div>
          <img
            width={270}
            height={160}
            src={contentData?.image}
            alt={contentData?.name}
          />
        </div>
      )}
      <div>{contentData?.name}</div>
      <div>
        <img src={iconPerson} alt="Person" />
        <div>{CAPACITY[contentData?.category]} orang</div>
      </div>
      <div>
        {new Intl.NumberFormat("id-ID", {
          style: "currency",
          currency: "IDR",
        }).format(contentData?.price)}
      </div>
      <div
        onClick={() => {
          setIsOpen((val) => !val);
        }}
        style={{
          minWidth: 347,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span>Refund, Reschedule, Overtime</span>
        <img
          className="iconChevron"
          data-open={isOpen}
          src={iconUp}
          alt="icon-up"
        />
      </div>
      <Collapse isOpen={isOpen}>
        <div>Tidak termasuk biaya makan sopir Rp 75.000/hari</div>
      </Collapse>
    </div>
  );
};

export default Content;
