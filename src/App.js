import {
  Button,
  Card,
  CardTitle,
  Row,
  Col,
  TextInput,
  Carousel,
} from "react-materialize";

function App() {
  return (
    <div>
      <h1>Selamat Datang React Materialize</h1>
      <Carousel
        options={{ fullWidth: true, indicators: true }}
        images={[
          "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01hda7wa68gv1xsj2t8b9a185e.png",
          "https://awsimages.detik.net.id/community/media/visual/2021/04/22/5-makanan-enak-dari-indonesia-dan-malaysia-yang-terkenal-enak-5.jpeg?w=600&q=90",
          "https://www.inilah.com/_next/image?url=https%3A%2F%2Fc.inilah.com%2Freborn%2F2023%2F08%2F1%2F0404_040704_a7ab_inilah_com_058015880f.jpg&w=1920&q=75",
          "https://cove-blog-id.sgp1.cdn.digitaloceanspaces.com/cove-blog-id/2023/03/Makanan-Khas-Jakarta.webp",
          "https://akcdn.detik.net.id/visual/2020/04/17/fbd5fd6c-17cf-4c2a-a97b-a89dd47b5657_169.jpeg?w=650",
        ]}
      ></Carousel>
      <Button>Success</Button>
      <Row>
        <Col m="5">
          <Card
            className="small"
            header={
              <CardTitle image="https://images.inc.com/uploaded_files/image/970x450/products_364475.jpg">
                Taman Bermain
              </CardTitle>
            }
          >
            Baju
          </Card>
        </Col>
        <Col m="5">
          <Card
            className="small"
            header={
              <CardTitle image="https://images.inc.com/uploaded_files/image/970x450/products_364475.jpg">
                Taman Bermain
              </CardTitle>
            }
          >
            Baju
          </Card>
        </Col>
      </Row>
      <TextInput type="text" label="Masukkan Nama Anda" />
      <Row>
        <TextInput type="text" label="Nama Depan" icon="account_circle" />
        <TextInput type="text" label="Nama Belakang" icon="account_circle" />
        <TextInput label="Masukkan Sebuah File" type="file" />
      </Row>
    </div>
  );
}

export default App;
