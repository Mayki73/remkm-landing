import React, { useDeferredValue } from "react";
import Interactive from "../../assets/interactive.png";
import { Tooltip } from "react-tippy";

type Tooltips = {
  id: number;
  x: number;
  y: number;
  description: React.ReactNode;
};

const InteractiveImage: React.FC = () => {
  const deferredInteractive = useDeferredValue(Interactive);
  const tooltips: Tooltips[] = [
    {
      id: 1,
      x: 110,
      y: 390,
      description: (
        <p className="max-w-[200px]">
          <b>Протекает</b>
          <br />
          Проблема может быть в:
          <br />— поврежденном уплотнении резервуара воды;
          <br /> — уплотнительных прокладках;
        </p>
      ),
    },
    {
      id: 2,
      x: 140,
      y: 240,
      description: (
        <p className="max-w-[200px]">
          <b>Не делает пену</b>
          <br />
          Для решения данной проблемы следует:
          <br />— Провести чистку кофемашины;
          <br />— Произвести замену капучинатора;
        </p>
      ),
    },
    {
      id: 3,
      x: 115,
      y: 260,
      description: (
        <p className="max-w-[200px]">
          <b>Не наливает кофе</b>
          <br />
          Неисправность могла быть вызвана:
          <br />— Засорение кофемашины кофейными маслами (декофинация);
          <br />— Обслуживание гидросистемы;
        </p>
      ),
    },
    {
      id: 4,
      x: 33,
      y: 190,
      description: (
        <p className="max-w-[200px]">
          <b>Нет пара</b>
          <br />
          Проблема может быть связанна с:
          <br />— Неисправностью бойлера;
          <br />— Неисправностью пароблока;
          <br />— Засорение кальцием.
        </p>
      ),
    },
    {
      id: 5,
      x: 130,
      y: 90,
      description: (
        <p className="max-w-[200px]">
          <b>Не работает</b>
          <br />
          Проблема может быть в:
          <br />— Пустом резервуаре для воды;
          <br />— Отсутствии кофе.
        </p>
      ),
    },
    {
      id: 6,
      x: 80,
      y: 40,
      description: (
        <p className="max-w-[200px]">
          <b>Не наливает воду</b>
          <br />
          Данная проблема, связана с:
          <br />— Требуется чистка кофемашины;
          <br />— Проблемы с насосом;
          <br />— Замена уплотнительных колец;
        </p>
      ),
    },
    {
      id: 7,
      x: 180,
      y: 20,
      description: (
        <p className="max-w-[200px]">
          <b>Не мелет кофе</b>
          <br />
          Неисправность связанна с:
          <br />— Затупленностью жерновов;
          <br />— Неисправностью кофемолки;
          <br />— Неисправностью электродвигателя кофемолки.
        </p>
      ),
    },
    {
      id: 8,
      x: 290,
      y: 190,
      description: (
        <p className="max-w-[200px]">
          <b>Шумит при работе</b>
          <br />
          Причина проблемы может быть:
          <br />— Засорение кофемашины;
          <br />— Проблемы с насосом;
        </p>
      ),
    },
  ];

  return (
    <div className="relative">
      <img
        src={deferredInteractive}
        alt="Кофемашина с интерактивными точками при нажатии на которые, отображается потенциальная неисправность"
        className="max-w-[20rem]"
      />
      {tooltips.map((tooltip) => (
        <span
          key={tooltip.id}
          className="absolute flex h-4 w-4 cursor-pointer"
          style={{ top: tooltip.y, left: tooltip.x }}
        >
          <Tooltip
            className="relative inline-flex z-[1] rounded-full h-4 w-4 bg-[#B8621B]"
            title="Welcome to React"
            position="bottom"
            trigger="mouseenter"
            hideDelay={2000}
            html={
              <div className="bg-white rounded-md p-2">
                {tooltip.description}
              </div>
            }
          />
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B8621B] opacity-75"></span>
        </span>
      ))}
    </div>
  );
};

export default InteractiveImage;
