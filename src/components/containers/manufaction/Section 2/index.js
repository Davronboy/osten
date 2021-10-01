import "./Sec2.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Tab, Row, Col, ListGroup } from "react-bootstrap";

const ManufacSec2 = () => {
  return (
    <div className="manufacsec2obwiy">
      <div className="container">
        <div className="manuafcsec2title text-center">
          <h1> Производство </h1>
          <hr className="manufacsec2liniya" />
        </div>
        <div className="prosec2qaysidur">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup className="">
                  <ListGroup.Item
                    className="manulist borderprob"
                    action
                    href="#link1"
                  >
                    <span className="manuspan">Пассажирские лифты</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="manulist borderprob"
                    action
                    href="#link2"
                  >
                    <span className="manuspan">Лифт для коттеджей</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="manulist borderprob"
                    action
                    href="#link3"
                  >
                    <span className="manuspan">Больничный лифт</span>
                  </ListGroup.Item>
                  <ListGroup.Item
                    className="manulist borderprob"
                    action
                    href="#link4"
                  >
                    <span className="manuspan"> Грузовой лифт</span>
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <p>
                      {" "}
                      <b>Пассажирские лифты</b>{" "}
                    </p>
                    <p>
                      Пассажирский лифт – это подъемный механизм, без которого
                      почти невозможно представить себе высотное здание, а
                      первый такой подъемник был установлен в Нью-Йорке еще в
                      1857 году. Устройство безопасности для лифтов Э.Г. Отиса,
                      в сочетании с использованием стальных каркасов зданий,
                      дало возможность строить высотные здания. С тех пор лифты
                      постоянно совершенствуются и улучшаются, но для регулярных
                      тестов требуются специальные высотные сооружения. Одним из
                      таких сооружений является испытательная башня OSTEN.
                    </p>
                    <p>
                      {" "}
                      <b>Пассажирский лифт-профиль</b>{" "}
                    </p>
                    <p>
                      В небольшом машинном отделении, пассажирский лифт Osten
                      имеет только около 65% - 70% от традиционного машинного
                      отделения. Это значи- тельно экономит строительное
                      пространство и материал. Шкаф управления в машинном
                      отделении выполнен в однослойной компоновке. Основная
                      опорная балка может также использоваться в качестве
                      сцепной пластины, что в значительной степени экономит
                      пространство машинного отделения. По сравнению с
                      традиционными лифтами, при условии обеспечения рабочего
                      пространства, предусмотренного национальным стандартом, он
                      эффективно контролирует высоту машинного отделения.
                      Интенсивный эффект пространства дает больше свободы для
                      архитекто- ров. Это предоставляет более широкое
                      использова- ние пространства для строительства. Прекрасно
                      сочетается с архитектурным стилем.
                    </p>
                    <img
                      src="https://osten.vercel.app/images/diff/img.jpg"
                      alt=""
                      className="manurasm"
                    />
                    <p>
                      {" "}
                      <b>
                        Меньше занимаемого места, более устойчивая конструкция
                      </b>{" "}
                    </p>
                    <p>
                      По сравнению с лифтом с машинным отделением от Osten,
                      машинное отделение является лишь продол- жением лифта. Это
                      обеспечивает более удобную установку, а также более низкую
                      стоимость.
                    </p>

                    <p>
                      {" "}
                      <b>Впечатляющая экономия энергии</b>{" "}
                    </p>
                    <p>
                      По сравнению с традиционной тяговой машиной, небольшой
                      машинный лифт Osten потребляет мень- ше энергии и меньше
                      потерь тепловой энергии.
                    </p>
                    <img
                      src="https://osten.vercel.app/images/diff/img2.jpg"
                      alt=""
                      className="manurasm"
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <p>
                      {" "}
                      <b>Лифт для коттеджей</b>{" "}
                    </p>
                    <p>
                      {" "}
                      <b>Лифты Osten,</b> предназначенные для коттеджей,
                      придерживаются идеи дизайна защиты окружающей среды и
                      энергосбережения, а также в настоящее время объединяются с
                      новейшей лифтовой технологией для обеспечения безопасности
                      и надежности продуктов компании. Элегантно
                      спроектированная кабина лифта, тонкая и изысканная техника
                      демонстрируют выдающуюся производительность лифтов Osten
                      данной серии.
                    </p>
                    <img
                      src="https://osten.vercel.app/images/diff/img3.jpg"
                      alt=""
                      className="manurasm w-100"
                    />
                    <img
                      src="https://osten.vercel.app/images/diff/img4.jpg"
                      alt=""
                      className="manurasm w-100"
                    />
                    <img
                      src="https://osten.vercel.app/images/diff/img5.jpg"
                      alt=""
                      className="manurasm w-100"
                    />
                  </Tab.Pane>

                  <Tab.Pane eventKey="#link3">
                    <p>
                      {" "}
                      <b>Больничный лифт</b>{" "}
                    </p>
                    <p>
                      Больничный лифт часто используется в огромных лечебных
                      заведениях, современных лечебных центрах, санаториях,
                      центрах медикосанитарной помощи и т. д., где лечение
                      больных и спасение умирающих является основной
                      обязанностью. Серия больничных лифтов Osten придерживается
                      гуманного подхода, применяет технологию группового
                      наблюдения из экспертной системы, а также сокращает время
                      ожидания пациентов до минимума.
                    </p>
                    <img
                      src="https://osten.vercel.app/images/diff/img6.jpg"
                      alt=""
                      className="manurasm"
                    />
                    <img
                      src="https://osten.vercel.app/images/diff/img7.jpg"
                      alt=""
                      className="manurasm"
                    />
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <p>
                      {" "}
                      <b>Грузовой лифт</b>{" "}
                    </p>
                    <p>
                      Грузовой лифт Osten использует передовую технологию
                      синхронного безредукторного тягового усилия с постоянными
                      магнитами, без машинного отделения. Тяговая машина имеет
                      преимущество в малом весе, малом объеме, экономит
                      архитектурное пространство, значительно повышает
                      производительность и качество, снижает энергопотребление,
                      частоту отказов.
                    </p>
                    <p>
                      Грузовой лифт Osten с меньшей высотой вала, уменьшает
                      высоту конструкции фабрик и других зданий, может отвечать
                      фактическим потребностям коммерческой. Самый лучший выбор
                      для перевозки товаров на фабриках, складах, универмагах,
                      центрах недвижимости, библиотек и т.д.
                    </p>
                    <img
                      src="https://osten.vercel.app/images/diff/img8.jpg"
                      alt=""
                      className="manurasm"
                    />
                    <img
                      src="https://osten.vercel.app/images/diff/img9.jpg"
                      alt=""
                      className="manurasm"
                    />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

export default ManufacSec2;
