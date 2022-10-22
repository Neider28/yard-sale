import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from '@styles/Paginate.module.css';

const Paginate = ({ totalItems, itemsPerPage, neighbours, setOffset }) => {
  const items = [];
  const [current, setCurrent] = useState(1);
  const totalPage = Math.ceil(totalItems / itemsPerPage);
  const end = Math.min(Math.max(neighbours * 2 + 2, neighbours + current + 1), totalPage + 1);
  const start = Math.min(Math.max(end - (neighbours * 2 + 1), 1), Math.max(current - neighbours, 1));

  for (let i = start; i < end; i++) {
    items.push(
      <a
        key={`Paginador-${i}`}
        onClick={() => {
          setCurrent(i);
          setOffset((i - 1) * itemsPerPage);
        }}
        href="#"
        className={`${getClassActive(i)} ${styles.item_paginate}`}
      >
        {i}
      </a>
    );
  }

  function getClassActive(i) {
    return i === current ? `${styles.item_current}` : `${styles.item_no_current}`;
  }

  function prevPage() {
    if (current > 1) {
      setCurrent(current - 1);
      setOffset((current - 2) * itemsPerPage);
    }
  }

  function nextPage() {
    if (current < totalPage) {
      setCurrent(current + 1);
      setOffset(current * itemsPerPage);
    }
  }

  return (
    <div className={styles.Paginate_container}>
      <div className={styles.Paginate_content}>
        <div className={styles.Paginate_title}>
          <p>
            Showing <span>{itemsPerPage * (current - 1) + 1}</span> to{' '}
            <span>{current * itemsPerPage < totalItems ? current * itemsPerPage : totalItems}</span> of <span>{totalItems}</span> results
          </p>
        </div>
        <div>
          <nav className={styles.nav_paginate}>
            <a
              onClick={() => prevPage()}
              href="#"
              className={styles.icon_paginate}
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </a>
            {items}
            <a
              onClick={() => nextPage()}
              href="#"
              className={styles.icon_paginate}
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
};

export { Paginate };