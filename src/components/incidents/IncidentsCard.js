import React from 'react';
import { DateTime } from 'luxon';
import { Card, Popover, Button, Tag } from 'antd';
import { nanoid } from 'nanoid';
import sourceListHelper from '../../utils/sourceListHelper';
import { shortenWord } from '../../utils/textHelperFxns';
import './Incidents.css';

const IncidentsCard = props => {
  let cityState = `${props.incident.city}, ${props.incident.state}`;

  return (
    <li className="card-box">
      <Card bordered={false}>
        <h3 className="incident-title">
          {shortenWord(props.incident.title, 70)}
        </h3>
        <div className="card-metadata">
          <p>
            {DateTime.fromISO(props.incident.date)
              .plus({ days: 1 })
              .toLocaleString(DateTime.DATE_MED)}
          </p>
          <p>{cityState}</p>
        </div>
        <h4 className="card-force">{props.incident.force_rank}</h4>
        <div className="tag-container">
          {props.incident.categories.map(cat => {
            return <Tag key={nanoid()}>{cat}</Tag>;
          })}
        </div>

        <p className="incident-desc">{props.incident.desc}</p>
        <Popover
          content={sourceListHelper(props.incident)}
          placement="rightTop"
        >
          <Button
            type="primary"
            style={{ backgroundColor: '#003767', border: 'none' }}
          >
            Sources
          </Button>
        </Popover>
      </Card>
    </li>
  );
};

export default IncidentsCard;
